/*
==========================================
NexIP Utility Functions
Version 1.0
==========================================
*/

/*
==========================================
Copy Text
==========================================
*/

export async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast("Copied to clipboard!");

        return true;

    } catch (error) {

        console.error(error);

        showToast("Unable to copy.");

        return false;

    }

}

/*
==========================================
Copy Element Text
==========================================
*/

export function copyElement(id) {

    const element = document.getElementById(id);

    if (!element) return;

    copyText(element.textContent.trim());

}

/*
==========================================
Toast Notification
==========================================
*/

export function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.right = "30px";
        toast.style.background = "#111827";
        toast.style.color = "#fff";
        toast.style.padding = "14px 20px";
        toast.style.borderRadius = "12px";
        toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
        toast.style.zIndex = "9999";
        toast.style.transition = "opacity .3s";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.style.opacity = "1";

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {

        toast.style.opacity = "0";

    }, 2500);

}

/*
==========================================
Safe HTML Update
==========================================
*/

export function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent = value ?? "-";

    }

}

/*
==========================================
Format Number
==========================================
*/

export function formatNumber(value) {

    return new Intl.NumberFormat().format(value);

}

/*
==========================================
Format Coordinates
==========================================
*/

export function formatCoordinate(value) {

    if (value === null || value === undefined || value === "-")
        return "-";

    return Number(value).toFixed(5);

}