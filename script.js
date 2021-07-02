var rootStyles = document.querySelector(":root").style;
var theme = "light";

function toggleDarkTheme() {
    if (theme === "light") {
        theme = "dark";

        rootStyles.setProperty("--primary-color", "#ffffff");
        rootStyles.setProperty("--secondary-color", "#000000");
        rootStyles.setProperty("--bg-gradient-color-one", "#3c5502");
        rootStyles.setProperty("--bg-gradient-color-two", "#114618");
        rootStyles.setProperty("--link-color", "#9944ee");
    }
}

function toggleLightTheme() {
    if (theme === "dark") {
        theme = "light";

        rootStyles.setProperty("--primary-color", "#000000");
        rootStyles.setProperty("--secondary-color", "#ffffff");
        rootStyles.setProperty("--bg-gradient-color-one", "#d4fc79");
        rootStyles.setProperty("--bg-gradient-color-two", "#96e6a1");
        rootStyles.setProperty("--link-color", "#663399");
    }
}
