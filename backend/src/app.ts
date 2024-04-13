import cors from "cors"
import express, { Application } from "express"
// import router from "./routes/index.routes";

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
// app.use(router);

export default app
