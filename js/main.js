/*
==========================================
NexIP
Main Controller
Version 0.5
==========================================
*/

import { initTheme } from "./theme.js";
import { updateBrowserInfo } from "./browser.js";
import { updateIPInfo } from "./ip.js";
import { copyElement, copyText, showToast } from "./utils.js";

/* ==========================================
   Initialize
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    initTheme();

    await refreshDashboard();

    initCopyCards();

    initButtons();

    initEvents();

});

/* ==========================================
   Refresh Everything
========================================== */

async function refreshDashboard() {

    updateBrowserInfo();

    await updateIPInfo();

    syncDashboardValues();

}

/* ==========================================
   Dashboard Sync
========================================== */

function syncDashboardValues() {

    copyValue("ip", "dashboard-ip");

    copyValue("country", "dashboard-country");

    copyValue("isp", "dashboard-isp");

    copyValue("asn", "dashboard-asn");

    copyValue("browser", "dashboard-browser");

    copyValue("os", "dashboard-os");

    copyValue("device", "dashboard-device");

    copyValue("screen", "dashboard-screen");

    copyValue("language", "dashboard-language");

    copyValue("timezone", "dashboard-timezone");

    copyValue("city", "dashboard-city");

    copyValue("region", "dashboard-region");

    copyValue("postal", "dashboard-postal");
}

/* ==========================================
   Copy Hero -> Dashboard
========================================== */

function copyValue(sourceId, targetId) {

    const source = document.getElementById(sourceId);

    const target = document.getElementById(targetId);

    if (!source || !target) return;

    target.textContent = source.textContent;

}

/* ==========================================
   Copy Card Click
========================================== */

function initCopyCards() {

    const cards = document.querySelectorAll(".copy-card");

    cards.forEach(card => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {

            const id = card.dataset.copyTarget;

            copyElement(id);

            flash(card);

        });

    });

}

/* ==========================================
   Buttons
========================================== */

function initButtons() {

    const copyAll = document.getElementById("copyAll");

    if (copyAll) {

        copyAll.addEventListener("click", copyAllInformation);

    }

    const refresh = document.getElementById("refreshInfo");

    if (refresh) {

        refresh.addEventListener("click", async () => {

            refresh.disabled = true;

            refresh.textContent = "Refreshing...";

            await refreshDashboard();

            refresh.disabled = false;

            refresh.textContent = "🔄 Refresh Information";

            showToast("Information updated");

        });

    }

    const copyIP = document.getElementById("copyIP");

    if (copyIP) {

        copyIP.addEventListener("click", () => {

            copyElement("ip");

        });

    }

}

/* ==========================================
   Copy All
========================================== */

function copyAllInformation() {

    const data = [

        line("Public IP", "ip"),

        line("Country", "country"),

        line("City", "city"),

        line("Region", "region"),

        line("ISP", "isp"),

        line("ASN", "asn"),

        line("Browser", "browser"),

        line("Operating System", "os"),

        line("Device", "device"),

        line("Screen", "screen"),

        line("Language", "language"),

        line("Timezone", "timezone")

    ].join("\n");

    copyText(data);

}

/* ==========================================
   Helper
========================================== */

function line(title, id) {

    const element = document.getElementById(id);

    if (!element)

        return "";

    return `${title}: ${element.textContent}`;

}

/* ==========================================
   Card Flash Animation
========================================== */

function flash(card) {

    card.style.transform = "scale(.97)";

    card.style.transition = ".15s";

    setTimeout(() => {

        card.style.transform = "";

    }, 150);

}

/* ==========================================
   Window Events
========================================== */

function initEvents() {

    window.addEventListener("resize", () => {

        updateBrowserInfo();

        syncDashboardValues();

    });

    window.addEventListener("online", () => {

        updateBrowserInfo();

        syncDashboardValues();

    });

    window.addEventListener("offline", () => {

        updateBrowserInfo();

        syncDashboardValues();

    });

}