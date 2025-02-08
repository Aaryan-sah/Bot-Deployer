function saveCode() {
    const code = document.getElementById("code-area").value;
    localStorage.setItem("bot_code", code);
    alert("Code saved successfully!");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("code-area").value = localStorage.getItem("bot_code") || "";
});