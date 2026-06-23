import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает контакты клиента из чата AI-консультанта и отправляет заявку на почту"""

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
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    comment = body.get('comment', '').strip()

    if not name and not phone and not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Нет данных'}, ensure_ascii=False)
        }

    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'💬 Заявка из чата AI-консультанта — {name or phone or email}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    rows = ''
    if name:
        rows += f'<tr><td style="padding:10px 0;color:#8494b0;font-size:13px;width:120px;">Имя</td><td style="padding:10px 0;color:#f0f4fc;font-size:15px;font-weight:bold;">{name}</td></tr>'
    if phone:
        rows += f'<tr style="border-top:1px solid #1a2540;"><td style="padding:10px 0;color:#8494b0;font-size:13px;">Телефон</td><td style="padding:10px 0;color:#f0f4fc;font-size:15px;font-weight:bold;">{phone}</td></tr>'
    if email:
        rows += f'<tr style="border-top:1px solid #1a2540;"><td style="padding:10px 0;color:#8494b0;font-size:13px;">Email</td><td style="padding:10px 0;color:#f0f4fc;font-size:15px;font-weight:bold;">{email}</td></tr>'
    if comment:
        rows += f'<tr style="border-top:1px solid #1a2540;"><td style="padding:10px 0;color:#8494b0;font-size:13px;vertical-align:top;">Комментарий</td><td style="padding:10px 0;color:#f0f4fc;font-size:15px;line-height:1.5;">{comment}</td></tr>'

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
      <div style="background:#080e1a;border-radius:12px;padding:32px;">
        <h2 style="color:#1de9b6;margin:0 0 8px 0;font-size:20px;">💬 Заявка из чата AI-консультанта</h2>
        <p style="color:#8494b0;font-size:13px;margin:0 0 24px 0;">Клиент оставил контакты в диалоге с AI-агентом на сайте</p>
        <table style="width:100%;border-collapse:collapse;">{rows}</table>
        <div style="margin-top:24px;padding:16px;background:rgba(29,233,182,0.08);border-radius:8px;border:1px solid rgba(29,233,182,0.2);">
          <p style="color:#1de9b6;margin:0;font-size:13px;">Свяжитесь с клиентом как можно скорее — он только что был активен в чате.</p>
        </div>
      </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True}, ensure_ascii=False)
    }
