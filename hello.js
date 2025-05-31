<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fetch Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 1em;
    }
    #output {
      white-space: pre-wrap;
      margin-top: 1em;
      padding: 1em;
      border: 1px solid #ccc;
      background: #f9f9f9;
    }
  </style>
</head>
<body>

  <button id="fetchButton">Send Request</button>
  <div id="output">Click the button to send a request.</div>

  <script>
    document.getElementById("fetchButton").addEventListener("click", () => {
      fetch("https://dev.hey.bild.de/api/search?query=a", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
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
  </script>

</body>
</html>
