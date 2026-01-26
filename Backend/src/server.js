import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`[AidFlow] Backend listening on part http://localhost:${PORT}`);
});
