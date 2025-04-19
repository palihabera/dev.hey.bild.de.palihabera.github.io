fetch("https://whoami-api.prod.ps.bild.de/api/refresh", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "grant_type": "refresh_token"
  })
})
.then(async (response) => {
  const text = await response.text();
  document.getElementById("output").textContent = `✅ SUCCESS:\n\n${text}`;
})
.catch((error) => {
  document.getElementById("output").textContent = `❌ ERROR:\n\n${error}`;
});
