document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://dev.hey.bild.de/api/search?query=a", {
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
