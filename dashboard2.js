const API_KEY = "YOUR_API_KEY";

function fetchBots() {
    fetch("https://api-prod-nexcreate-01.nexxtech.in/api/v2/fetchAllBots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: API_KEY })
    })
    .then(response => response.json())
    .then(data => {
        let botsList = document.getElementById("bots-list");
        let totalBots = document.getElementById("total-bots");
        botsList.innerHTML = "";
        totalBots.textContent = data.bots.length;

        data.bots.forEach(bot => {
            botsList.innerHTML += `
                <div class="bot-card">
                    <h3>${bot.username}</h3>
                    <p>Status: ${bot.status}</p>
                    <button onclick="startBot('${bot.id}')">Start</button>
                    <button onclick="stopBot('${bot.id}')">Stop</button>
                    <button onclick="deleteBot('${bot.id}')">Delete</button>
                </div>
            `;
        });
    })
    .catch(error => alert(error.message));
}

function startBot(botId) {
    fetch("https://api-prod-nexcreate-01.nexxtech.in/api/v2/alter-bot-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: API_KEY, botId, request_param: "start" })
    })
    .then(() => alert("Bot Started!"))
    .catch(error => alert(error.message));
}

function stopBot(botId) {
    fetch("https://api-prod-nexcreate-01.nexxtech.in/api/v2/alter-bot-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: API_KEY, botId, request_param: "stop" })
    })
    .then(() => alert("Bot Stopped!"))
    .catch(error => alert(error.message));
}

function deleteBot(botId) {
    fetch("https://api-prod-nexcreate-01.nexxtech.in/api/v2/deleteBot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: API_KEY, botId })
    })
    .then(() => {
        alert("Bot Deleted!");
        fetchBots();
    })
    .catch(error => alert(error.message));
}

function fetchErrors() {
    fetch("https://api-prod-nexcreate-01.nexxtech.in/api/v2/errCollectionInfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: API_KEY })
    })
    .then(response => response.json())
    .then(data => {
        let errorLogs = document.getElementById("error-logs");
        errorLogs.innerHTML = "<h3>Error Logs</h3>";
        
        data.errors.forEach(error => {
            errorLogs.innerHTML += `<p>${error.message}</p>`;
        });
    })
    .catch(error => alert(error.message));
}

document.addEventListener("DOMContentLoaded", fetchBots);