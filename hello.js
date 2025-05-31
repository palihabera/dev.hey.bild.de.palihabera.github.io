document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://dev.hey.bild.de/api/search?query=a", {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "*/*",
      "Accept-Language": "cs,sk;q=0.8,en-US;q=0.5,en;q=0.3",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      // "Referer" and "Origin" are usually set by browser automatically and may not be allowed to override
      // "Sec-Fetch-Dest", "Sec-Fetch-Mode", "Sec-Fetch-Site" might be blocked or set by the browser
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
