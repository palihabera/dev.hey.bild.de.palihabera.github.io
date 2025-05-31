document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://whoami-api.prod.ps.bild.de/api/refresh?returnTo=https://dev.hey.bild.de", {
    method: "GET",
    credentials: "include",
    headers: {
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    },
  })
  .then(async (response) => {
    const text = await response.text();
    document.getElementById("output").textContent = `✅ SUCCESS:\n\n${text}`;
  })
  .catch((error) => {
    document.getElementById("output").textContent = `❌ ERROR:\n\n${error}`;
  });
});
