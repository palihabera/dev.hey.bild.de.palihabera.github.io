document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://whoami-api.prod.ps.bild.de/api/refresh?returnTo=https://whoami-api.prod.ps.bild.de/api/refresh", {
    method: "GET",
    credentials: "include",
  })
  .then(async (response) => {
    const text = await response.text();
    document.getElementById("output").textContent = `✅ SUCCESS:\n\n${text}`;
  })
  .catch((error) => {
    document.getElementById("output").textContent = `❌ ERROR:\n\n${error}`;
  });
});
