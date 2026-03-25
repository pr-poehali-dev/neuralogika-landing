import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с формы лендинга НейроЛогика на почту unirek.msk@ya.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните имя и контакт'}, ensure_ascii=False)
        }

    smtp_user = 'unirek.msk@ya.ru'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'unirek.msk@ya.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта НейроЛогика — {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9;">
      <div style="background: #080e1a; border-radius: 12px; padding: 32px;">
        <h2 style="color: #1de9b6; margin: 0 0 24px 0; font-size: 20px;">
          🔔 Новая заявка с сайта НейроЛогика
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #8494b0; font-size: 13px; width: 120px;">Имя</td>
            <td style="padding: 10px 0; color: #f0f4fc; font-size: 15px; font-weight: bold;">{name}</td>
          </tr>
          <tr style="border-top: 1px solid #1a2540;">
            <td style="padding: 10px 0; color: #8494b0; font-size: 13px;">Контакт</td>
            <td style="padding: 10px 0; color: #f0f4fc; font-size: 15px; font-weight: bold;">{contact}</td>
          </tr>
          {f'''<tr style="border-top: 1px solid #1a2540;">
            <td style="padding: 10px 0; color: #8494b0; font-size: 13px; vertical-align: top;">Задача</td>
            <td style="padding: 10px 0; color: #f0f4fc; font-size: 15px; line-height: 1.5;">{message}</td>
          </tr>''' if message else ''}
        </table>
        <div style="margin-top: 24px; padding: 16px; background: rgba(29,233,182,0.08); border-radius: 8px; border: 1px solid rgba(29,233,182,0.2);">
          <p style="color: #1de9b6; margin: 0; font-size: 13px;">
            Заявка на бесплатный аудит. Свяжитесь с клиентом в течение рабочего дня.
          </p>
        </div>
      </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True}, ensure_ascii=False)
    }