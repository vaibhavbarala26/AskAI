require('dotenv').config()
const express = require("express")
const app = express();
const cors = require("cors")
const fs = require("fs")
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })
const connectiona = require('./connect');
const ChatModel = require("./Model/User.js")
const bcrypt = require("bcrypt")
const PORT = process.env.PORT
const BP = require("body-parser")
app.use(express.json())
app.use(BP.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genAi = new GoogleGenerativeAI("API_KEY")
async function run(req, res) {
    const model = genAi.getGenerativeModel({ model: "gemini-pro" })
    const prompt = req?.body?.prompt;
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    const chat = await ChatModel.create({ user: prompt, assistant: text })
    res.json(chat)
}
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        }
    };
}
connectiona().then(() => {
    app.post("/chat", run);
    app.post("/image", upload.single("file"), async (req, res) => {
        const {prompt} = req.body
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        console.log(newPath);
        const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
        const imagePArts = [fileToGenerativePart(newPath, "image/jpeg")];
        const result = await model.generateContent([prompt, ...imagePArts]);
        const response = await result.response;
        const text = response.text();
        const chat = await ChatModel.create({ user: prompt, assistant: text , image:path })
        res.json(chat)
        console.log(req.file);
        
    })
    app.get("/chat", async (req, res) => {
        const chat = await ChatModel.find().sort({time:-1})
        res.json(chat);
    })
    app.listen(PORT, () => {
        console.log("Listening to PORT");
    })
})
