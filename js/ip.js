/*
==========================================
NexIP IP Engine
Version 2.0
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

            ip: data.ip || "-",

            country: data.country || "-",

            region: data.region || "-",

            city: data.city || "-",

            postal: data.postal || "-",

            latitude: data.latitude || "-",

            longitude: data.longitude || "-",

            timezone: data.timezone?.id || "-",

            currency: data.currency?.code || "-",

            isp: data.connection?.isp || "-",

            asn: data.connection?.asn || "-",

            ipVersion: data.type || "-"

        };

        // Hero

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

        // Dashboard

        set("dashboard-ip", info.ip);

        set("dashboard-country", info.country);

        set("dashboard-region", info.region);
        
        set("dashboard-postal", info.postal);

        set("dashboard-city", info.city);

        set("dashboard-isp", info.isp);

        set("dashboard-asn", info.asn);

        set("dashboard-timezone", info.timezone);

        // Summary

        set("summaryIP", info.ip);

        set("summaryCountry", info.country);

        set("summaryTimezone", info.timezone);

    }

    catch(error){

        console.error(error);

        setUnavailable();

    }

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

    element.textContent = value;

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
Future Refresh API
==========================================
*/

export async function refreshIPInfo() {

    await updateIPInfo();

}

/*
==========================================
Future JSON Export
==========================================
*/

export function collectIPInfo() {

    return {

        ip: text("ip"),

        country: text("country"),

        city: text("city"),

        region: text("region"),

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
Read Text
==========================================
*/

function text(id) {

    const element = document.getElementById(id);

    if (!element)
        return "";

    return element.textContent;

}