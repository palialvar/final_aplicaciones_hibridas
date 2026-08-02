import "dotenv/config"
import express from "express"
import cors from "cors"
import usuariosRoute from "./routes/usuarios.routes.js"
import librosRoute from "./routes/libros.routes.js"
import autoresRoute from "./routes/autores.routes.js"

const app = express()
const PORT = process.env.PORT || 3333

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean)

app.use(express.json())

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        return callback(new Error("No permitido por CORS"))
    }
}))

app.use("/uploads", express.static("uploads"))

app.use("/api/usuarios", usuariosRoute)
app.use("/api/libros", librosRoute)
app.use("/api/autores", autoresRoute)

app.listen(PORT, () => console.log("Funcionando en puerto " + PORT))
