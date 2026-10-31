/**
 * Serves a dependency-free sample page for App Service deployment testing.
 * Each response includes the host name and the time the response was generated.
 */

const http = require("node:http");
const os = require("node:os");

const port = process.env.PORT || 8080;

const server = http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App Service deployment playground</title>
    <style>
      body { font: 16px/1.5 system-ui, sans-serif; margin: 3rem; max-width: 48rem; }
      code { background: #f3f3f3; padding: 0.15rem 0.35rem; }
    </style>
  </head>
  <body>
    <h1>App Service deployment playground</h1>
    <p>This app was deployed from the public GitHub sample repository.</p>
    <p>Host: <code>${os.hostname()}</code></p>
    <p>Process started: <code>${new Date().toISOString()}</code></p>
  </body>
</html>`);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
