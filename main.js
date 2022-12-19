var embed = new Twitch.Embed("twitch-embed", {
  channel: "monstercat",
  // Only needed if this page is going to be embedded on other websites
  parent: ["embed.example.com", "othersite.example.com"]
});

var titlePage = "Stream - Streameur.tv"
window.onload = function () {
        document.title = titlePage
}

embed.addEventListener(Twitch.Player.ONLINE, () => {
        document.getElementById('twitch-embed').style.display = "block"
        document.title = "[ONLINE] "+titlePage
})

embed.addEventListener(Twitch.Player.OFFLINE, () => {
        document.getElementById('twitch-embed').style.display = "none"
        document.title = "[OFFLINE] "+titlePage
})