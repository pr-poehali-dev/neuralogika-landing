import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

const TITLE = "НейроЛогика — ИИ для бизнеса";
const DESCRIPTION =
    "Внедрение технологий искусственного интеллекта и автоматизация бизнес-процессов для малого и среднего бизнеса";
const OG_IMAGE =
    "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/bucket/2452d262-46c1-426c-981d-cba515e6ed2b.png";
const FAVICON = "https://cdn.poehali.dev/files/186cb209-1550-4bc0-bb53-e834367212c1.png";

const ORG_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "НейроЛогика",
    "description": DESCRIPTION,
    "url": "https://nl-ai.ru/",
    "logo": FAVICON,
    "image": "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/files/886bdab2-31a9-43bc-85d3-6f825e3f6d17.jpg",
    "areaServed": {
        "@type": "Country",
        "name": "Россия",
    },
    "inLanguage": "ru-RU",
    "serviceType": [
        "Внедрение искусственного интеллекта",
        "Автоматизация бизнес-процессов",
        "Разработка AI-решений",
        "Чат-боты и ИИ-ассистенты",
    ],
    "offers": {
        "@type": "Offer",
        "description": "Бесплатный аудит бизнес-процессов на 30 минут",
        "price": "0",
        "priceCurrency": "RUB",
    },
};

const METRIKA_1 = `(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110368850', 'ym');
ym(110368850, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`;

const METRIKA_2 = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(101026698, "init", { trustedDomains: ["poehali.dev"], clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true });`;

const CHAT_OPEN = `setTimeout(function() {
    if (typeof window.twc_agent_open === 'function') window.twc_agent_open();
}, 2000);`;

const CHAT_LEAD = `(function() {
    var CHAT_LEAD_URL = 'https://functions.poehali.dev/9c54c53e-a76c-4341-87b8-46ddcecf3878';
    var sentHashes = {};
    function hashStr(s) {
        var h = 0;
        for (var i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
        return h;
    }
    function tryExtractLead(text) {
        var match = text.match(/\\{[^{}]*"name"[^{}]*\\}/);
        if (!match) return null;
        try {
            var data = JSON.parse(match[0]);
            if (data && (data.name || data.phone || data.email)) return data;
        } catch(e) {}
        return null;
    }
    function getSentKeys() {
        try { return JSON.parse(localStorage.getItem('_cl_sent') || '{}'); } catch(e) { return {}; }
    }
    function saveSentKey(key) {
        try {
            var keys = getSentKeys();
            keys[key] = 1;
            localStorage.setItem('_cl_sent', JSON.stringify(keys));
        } catch(e) {}
    }
    function sendLead(data) {
        var key = String(hashStr(JSON.stringify(data)));
        if (sentHashes[key]) return;
        var stored = getSentKeys();
        if (stored[key]) { sentHashes[key] = true; return; }
        sentHashes[key] = true;
        saveSentKey(key);
        fetch(CHAT_LEAD_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(function(){});
    }
    function getAllText() {
        var texts = [];
        if (!document.body) return '';
        texts.push(document.body.innerText || '');
        document.querySelectorAll('*').forEach(function(el) {
            if (el.shadowRoot) texts.push(el.shadowRoot.textContent || '');
        });
        document.querySelectorAll('iframe').forEach(function(iframe) {
            try {
                var doc = iframe.contentDocument || iframe.contentWindow.document;
                if (doc) texts.push(doc.body.innerText || '');
            } catch(e) {}
        });
        return texts.join(' ');
    }
    function scan() {
        var text = getAllText();
        var lead = tryExtractLead(text);
        if (lead) sendLead(lead);
    }
    setInterval(scan, 2000);
})();`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "author", content: "poehali.dev"},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:image:width", content: "1200"},
            {property: "og:image:height", content: "630"},
            {property: "og:image:alt", content: TITLE},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:type", content: "website"},
            {property: "og:url", content: "https://nl-ai.ru/"},
            {property: "og:locale", content: "ru_RU"},
            {property: "og:site_name", content: "НейроЛогика"},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:title", content: TITLE},
            {name: "twitter:description", content: DESCRIPTION},
            {name: "twitter:image", content: OG_IMAGE},
            {name: "yandex-verification", content: "35736ba7214869fe"},
            {name: "robots", content: "index, follow"},
            {name: "googlebot", content: "index, follow"},
            {name: "yandex", content: "index, follow"},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap",
            },
            {rel: "icon", type: "image/png", href: FAVICON},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {type: "application/ld+json", children: JSON.stringify(ORG_JSON_LD)},
            {children: METRIKA_1},
            {children: METRIKA_2},
            {
                src: "https://timeweb.cloud/api/v1/cloud-ai/agents/a269a55e-5742-43d2-ac13-3809e04d954f/embed.js?collapsed=true",
                async: true,
            },
            {children: CHAT_OPEN},
            {children: CHAT_LEAD},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    return (
        <RootDocument>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <ScrollToTop/>
                <Outlet/>
            </TooltipProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <Scripts/>
        </body>
        </html>
    );
}
