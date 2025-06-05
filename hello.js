document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://dev.hey.bild.de/api/user-context/fields", {
    method: "DELETE",
    credentials: "include",
    headers: {
    'accept': 'application/json'}
  })
  .then(async (response) => {
    const text = await response.text();
    document.getElementById("output").textContent = `✅ SUCCESS:\n\n${text}`;
  })
  .catch((error) => {
    document.getElementById("output").textContent = `❌ ERROR:\n\n${error}`;
  });
});
