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
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.send(swaggerSpec)
})

// Routes
app.use(router)

export default app
