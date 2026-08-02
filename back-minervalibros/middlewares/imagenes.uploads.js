import multer from "multer"
import sharp from "sharp"

const storage = multer.memoryStorage()

export const upload = multer({ storage })

export async function resize(req, res, next) {
    if (!req?.file) return next()

    const numeroAleatorio = Math.floor(Math.random() * 1000000)
    const imagen = "uploads/" + numeroAleatorio + ".webp"

    try {
        await sharp(req.file.buffer)
            .resize(500)
            .webp()
            .toFile(imagen)

        req.file = numeroAleatorio + ".webp"

        next()
    } catch (error) {
        return res.status(500).json({ message: "No se pudo procesar la imagen" })
    }
}
