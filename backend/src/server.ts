import app from "./app";

// FUTURE: Add database connection before starting the server.
const PORT = Number(process.env.PORT) || 3001;
const HOST = "localhost"

const startServer = () => {
    try {
        app.listen(PORT, HOST, () => {
            console.log(`Server running on http://${HOST}:${PORT}`);
        })
    } catch (error) {
        console.error("Error starting server: ", error);
        process.exit(1);
    }
};

process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception: ", error);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at: ", promise, " reason: ", reason);
    process.exit(1);
})

startServer();