/*
==========================================
NexIP IP Engine
Version 3.0
==========================================
*/

/*
==========================================
Update IP Information
==========================================
*/

export async function updateIPInfo() {

    try {

        const response = await fetch("https://ipwho.is/");

        const data = await response.json();

        if (!data.success) {

            throw new Error("Unable to fetch IP information.");

        }

        const info = {

            ip: normalizeDigits(data.ip || "-"),

            country: data.country || "-",

            region: data.region || "-",

            city: data.city || "-",

            postal: normalizeDigits(data.postal || "-"),

            latitude: data.latitude || "-",

            longitude: data.longitude || "-",

            timezone: data.timezone?.id || "-",

            currency: data.currency?.code || "-",

            isp: data.connection?.isp || "-",

            asn: data.connection?.asn || "-",

            ipVersion: data.type || "-"

        };

        /*
        ==========================================
        Hero
        ==========================================
        */

        set("ip", info.ip);

        set("country", info.country);

        set("region", info.region);

        set("city", info.city);

        set("postal", info.postal);

        set("latitude", info.latitude);

        set("longitude", info.longitude);

        set("timezone", info.timezone);

        set("currency", info.currency);

        set("isp", info.isp);

        set("asn", info.asn);

        set("ipVersion", info.ipVersion);

        /*
        ==========================================
        Dashboard
        ==========================================
        */

        set("dashboard-ip", info.ip);

        set("dashboard-country", info.country);

        set("dashboard-region", info.region);

        set("dashboard-city", info.city);

        set("dashboard-postal", info.postal);

        set("dashboard-isp", info.isp);

        set("dashboard-asn", info.asn);

        set("dashboard-timezone", info.timezone);

        /*
        ==========================================
        Summary
        ==========================================
        */

        set("summaryIP", info.ip);

        set("summaryCountry", info.country);

        set("summaryTimezone", info.timezone);

    }

    catch (error) {

        console.error(error);

        setUnavailable();

    }

}

/*
==========================================
Convert Local Digits
(Bengali / Arabic / Persian)
==========================================
*/

function normalizeDigits(value) {

    if (value === null || value === undefined)
        return "-";

    return String(value).replace(/[٠-٩۰-۹০-৯]/g, function (digit) {

        const map = {

            "٠":"0","١":"1","٢":"2","٣":"3","٤":"4",
            "٥":"5","٦":"6","٧":"7","٨":"8","٩":"9",

            "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4",
            "۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",

            "০":"0","১":"1","২":"2","৩":"3","৪":"4",
            "৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"

        };

        return map[digit] || digit;

    });

}
/*
==========================================
Set All Fields Unavailable
==========================================
*/

function setUnavailable() {

    const ids = [

        "ip",
        "country",
        "region",
        "city",
        "postal",
        "latitude",
        "longitude",
        "timezone",
        "currency",
        "isp",
        "asn",
        "ipVersion",

        "dashboard-ip",
        "dashboard-country",
        "dashboard-region",
        "dashboard-city",
        "dashboard-postal",
        "dashboard-isp",
        "dashboard-asn",
        "dashboard-timezone",

        "summaryIP",
        "summaryCountry",
        "summaryTimezone"

    ];

    ids.forEach(id => {

        set(id, "Unavailable");

    });

}

/*
==========================================
Update Element
==========================================
*/

function set(id, value) {

    const element = document.getElementById(id);

    if (!element)
        return;

    if (typeof value === "string" || typeof value === "number") {

        value = normalizeDigits(value);

    }

    element.textContent = value;

}

/*
==========================================
Read Text
==========================================
*/

function text(id) {

    const element = document.getElementById(id);

    if (!element)
        return "";

    return element.textContent;

}

/*
==========================================
Future Country Flag Support
==========================================
*/

export function getCountryFlag(countryCode) {

    if (!countryCode)
        return "";

    return `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;

}

/*
==========================================
Refresh
==========================================
*/

export async function refreshIPInfo() {

    await updateIPInfo();

}
/*
==========================================
Collect Current IP Information
==========================================
*/

export function collectIPInfo() {

    return {

        ip: text("ip"),

        country: text("country"),

        region: text("region"),

        city: text("city"),

        postal: text("postal"),

        isp: text("isp"),

        asn: text("asn"),

        timezone: text("timezone"),

        latitude: text("latitude"),

        longitude: text("longitude"),

        currency: text("currency"),

        ipVersion: text("ipVersion")

    };

}

/*
==========================================
Copy Current IP Information
==========================================
*/

export function copyIPInfo() {

    const info = collectIPInfo();

    const textData =

`Public IP: ${info.ip}
Country: ${info.country}
Region: ${info.region}
City: ${info.city}
ZIP Code: ${info.postal}
ISP: ${info.isp}
ASN: ${info.asn}
Timezone: ${info.timezone}
Latitude: ${info.latitude}
Longitude: ${info.longitude}
Currency: ${info.currency}
IP Version: ${info.ipVersion}`;

    navigator.clipboard.writeText(textData);

}

/*
==========================================
Export JSON
==========================================
*/

export function exportJSON() {

    return JSON.stringify(

        collectIPInfo(),

        null,

        4

    );

}

/*
==========================================
Future Helpers
==========================================
*/

export function getIPAddress() {

    return text("ip");

}

export function getCountry() {

    return text("country");

}

export function getISP() {

    return text("isp");

}

export function getASN() {

    return text("asn");

}

export function getPostalCode() {

    return text("postal");

}

export function getCoordinates() {

    return {

        latitude: text("latitude"),

        longitude: text("longitude")

    };

}

/*
==========================================
End of File
==========================================
*/
