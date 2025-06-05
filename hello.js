document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://dev.hey.bild.de/api/admin-info/current-user-id", {
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
