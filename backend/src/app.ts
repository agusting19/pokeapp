import cors from "cors"
import express, { Application } from "express"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./doc/swaggerConfig"
import router from "./routes"

const app: Application = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Routes
app.use(router)

export default app
