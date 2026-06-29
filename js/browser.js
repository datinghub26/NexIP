/*
==========================================
NexIP Browser Engine
Version 3.0
==========================================
*/

export function updateBrowserInfo() {

    const ua = navigator.userAgent;

    let browser = "Unknown";
    let version = "";
    let engine = "Unknown";

    /* ======================================
       Browser Detection
    ====================================== */

    if (/FxiOS/i.test(ua)) {

        browser = "Firefox";
        version = ua.match(/FxiOS\/([\d.]+)/)?.[1] || "";
        engine = "WebKit";

    }

    else if (/EdgiOS/i.test(ua)) {

        browser = "Microsoft Edge";
        version = ua.match(/EdgiOS\/([\d.]+)/)?.[1] || "";
        engine = "WebKit";

    }

    else if (/CriOS/i.test(ua)) {

        browser = "Google Chrome";
        version = ua.match(/CriOS\/([\d.]+)/)?.[1] || "";
        engine = "WebKit";

    }

    else if (/OPR/i.test(ua)) {

        browser = "Opera";
        version = ua.match(/OPR\/([\d.]+)/)?.[1] || "";
        engine = "Blink";

    }

    else if (/SamsungBrowser/i.test(ua)) {

        browser = "Samsung Internet";
        version = ua.match(/SamsungBrowser\/([\d.]+)/)?.[1] || "";
        engine = "Blink";

    }

    else if (/Firefox/i.test(ua)) {

        browser = "Firefox";
        version = ua.match(/Firefox\/([\d.]+)/)?.[1] || "";
        engine = "Gecko";

    }

    else if (/Edg/i.test(ua)) {

        browser = "Microsoft Edge";
        version = ua.match(/Edg\/([\d.]+)/)?.[1] || "";
        engine = "Blink";

    }

    else if (/Chrome/i.test(ua)) {

        browser = "Google Chrome";
        version = ua.match(/Chrome\/([\d.]+)/)?.[1] || "";
        engine = "Blink";

    }

    else if (/Safari/i.test(ua)) {

        browser = "Safari";
        version = ua.match(/Version\/([\d.]+)/)?.[1] || "";
        engine = "WebKit";

    }

    /* ======================================
       Operating System
    ====================================== */

    let os = "Unknown";

    if (/Windows NT 10/i.test(ua))
        os = "Windows 10 / 11";

    else if (/Windows NT 6.3/i.test(ua))
        os = "Windows 8.1";

    else if (/Windows NT 6.1/i.test(ua))
        os = "Windows 7";

    else if (/Android/i.test(ua)) {

        const v = ua.match(/Android\s([\d.]+)/)?.[1];

        os = v ? `Android ${v}` : "Android";

    }

    else if (/iPhone/i.test(ua)) {

        const v = ua.match(/OS\s([\d_]+)/)?.[1];

        os = v ? `iOS ${v.replace(/_/g, ".")}` : "iOS";

    }

    else if (/iPad/i.test(ua)) {

        const v = ua.match(/OS\s([\d_]+)/)?.[1];

        os = v ? `iPadOS ${v.replace(/_/g, ".")}` : "iPadOS";

    }

    else if (/Mac OS X/i.test(ua)) {

        const v = ua.match(/Mac OS X\s([\d_]+)/)?.[1];

        os = v ? `macOS ${v.replace(/_/g, ".")}` : "macOS";

    }

    else if (/Linux/i.test(ua))
        os = "Linux";

    /* ======================================
       Device Type
    ====================================== */

    let device = "Desktop";

    if (/iPad/i.test(ua))
        device = "Tablet";

    else if (/Tablet/i.test(ua))
        device = "Tablet";

    else if (/Android|iPhone|Mobile/i.test(ua))
        device = "Mobile";

    /* ======================================
       Browser Information
    ====================================== */

    const browserText = version
        ? `${browser} ${version}`
        : browser;

    const screenResolution =
        `${screen.width} × ${screen.height}`;

    const viewport =
        `${window.innerWidth} × ${window.innerHeight}`;

    const language =
        navigator.language;

    const timezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;

    const online =
        navigator.onLine ? "Online" : "Offline";

    const cookies =
        navigator.cookieEnabled ? "Enabled" : "Disabled";

    const platform =
        navigator.userAgentData?.platform || navigator.platform;

    const colorScheme =
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "Dark"
            : "Light";

    /* ======================================
       Update Dashboard
    ====================================== */

    update("browser", browserText);
    update("dashboard-browser", browserText);
    update("summaryBrowser", browserText);

    update("browserEngine", engine);

    update("os", os);
    update("dashboard-os", os);
    update("summaryOS", os);

    update("device", device);
    update("dashboard-device", device);
    update("summaryDevice", device);

    update("screen", screenResolution);
    update("dashboard-screen", screenResolution);

    update("viewport", viewport);

    update("language", language);
    update("dashboard-language", language);

    update("timezone", timezone);
    update("dashboard-timezone", timezone);
    update("summaryTimezone", timezone);

    update("online", online);

    update("cookies", cookies);

    update("platform", platform);

    update("colorScheme", colorScheme);

}

/*
==========================================
Helper
==========================================
*/

function update(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = value;

}
