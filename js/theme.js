/*
==========================================
NexIP Theme Engine
Version 1.0
==========================================
*/

const STORAGE_KEY = "nexip-theme";

/*
==========================================
Initialize Theme
==========================================
*/

export function initTheme() {

    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    updateThemeButton();

    const button = document.getElementById("themeToggle");

    if (button) {

        button.addEventListener("click", toggleTheme);

    }

}

/*
==========================================
Toggle Theme
==========================================
*/

export function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem(
        STORAGE_KEY,
        isLight ? "light" : "dark"
    );

    updateThemeButton();

}

/*
==========================================
Update Button Icon
==========================================
*/

function updateThemeButton() {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    if (document.body.classList.contains("light-mode")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }

}