import app from "./app";

// FUTURE: Add database connection before starting the server.
const PORT = process.env.PORT || 3001;
const HOST = "127.0.0.1"

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});