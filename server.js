const dotenv = require('dotenv')
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// ====== Requiring App & Http =====
const app = require('./app')
const http = require("http");

// === Crashing the server if any uncaught error occurs ===
process.on("uncaughtException", (err) => {
    console.log("Unhandled Exception : Shutting down....");
    process.exit(1);
});

const port = process.env.PORT || 3500

app.set('port', port)

// ==== Creating Server ====

const server = http.createServer(app)

server.on('listening', () => {
  console.log("✓", `Listening on Port ${port}`);
})

server.listen(port)


