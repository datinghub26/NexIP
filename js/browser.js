/*
==========================================
NexIP Browser Engine
Version 2.0
==========================================
*/

export function updateBrowserInfo() {

    const ua = navigator.userAgent;

    let browser = "Unknown";
    let version = "Unknown";
    let engine = "Unknown";

    // Browser Detection
    if (ua.includes("Firefox")) {
        browser = "Firefox";
        version = ua.match(/Firefox\/([\d.]+)/)?.[1] || "";
        engine = "Gecko";
    }

    else if (ua.includes("Edg")) {
        browser = "Microsoft Edge";
        version = ua.match(/Edg\/([\d.]+)/)?.[1] || "";
        engine = "Blink";
    }

    else if (ua.includes("Chrome")) {
        browser = "Google Chrome";
        version = ua.match(/Chrome\/([\d.]+)/)?.[1] || "";
        engine = "Blink";
    }

    else if (ua.includes("Safari")) {
        browser = "Safari";
        version = ua.match(/Version\/([\d.]+)/)?.[1] || "";
        engine = "WebKit";
    }

    // Operating System

    let os = "Unknown";

    if (ua.includes("Windows NT 10"))
        os = "Windows 10 / 11";

    else if (ua.includes("Windows NT 6.3"))
        os = "Windows 8.1";

    else if (ua.includes("Windows NT 6.1"))
        os = "Windows 7";

    else if (ua.includes("Android"))
        os = "Android";

    else if (ua.includes("iPhone"))
        os = "iPhone";

    else if (ua.includes("iPad"))
        os = "iPad";

    else if (ua.includes("Mac"))
        os = "macOS";

    else if (ua.includes("Linux"))
        os = "Linux";

    // Device

    let device = "Desktop";

    if (/Android|iPhone|Mobile/i.test(ua))
        device = "Mobile";

    else if (/iPad|Tablet/i.test(ua))
        device = "Tablet";

    // Information

    const browserText = `${browser} ${version}`;

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
        navigator.platform;

    const colorScheme =
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "Dark"
            : "Light";

    // Update all fields

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

    if (!element)
        return;

    element.textContent = value;

}