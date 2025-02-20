import app from "./app";

// FUTURE: Add database connection before starting the server.
const PORT = Number(process.env.PORT) || 3001;
const HOST = "localhost"

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});