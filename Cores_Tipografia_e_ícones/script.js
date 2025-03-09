document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkButton = document.getElementById("toggle-dark");
    const toggleLightButton = document.getElementById("toggle-light");

    // Verifica o tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }

    // Alternar para o modo escuro
    toggleDarkButton.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
    });

    // Alternar para o modo claro
    toggleLightButton.addEventListener("click", function () {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    });
});
