



Bun.serve({
  fetch(req) {
    return new Response("Hello!!!");
  },

  tls: {
    key: Bun.file("src/lib/div/key.pem"),
    cert: Bun.file("src/lib/div/cert.pem"),
  }
});


console.log("Bun Loaded HTTPS config");

