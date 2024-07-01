const {GoogleGenerativeAI} = require("@google/generative-ai")
const genAi = new GoogleGenerativeAI("AIzaSyCuAGJwIw2lALABbH-P68Qn1a4xkAL4syI")
const fs = require("fs")
async function run(){
    const model = genAi.getGenerativeModel({model:"gemini-pro"})
    const prompt = "dog"
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    console.log(text);
}
function fileToGenerativePart(path , mimeType){
    return {
        inlineData:{
            data:Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType       
        },
    };
}
async function imagerun(){
    const model = genAi.getGenerativeModel({model:"gemini-1.5-flash"});
    const prompt = "what is this?"
    const imagePArts = [fileToGenerativePart("sarjan.jpg" , "image/jpeg")];
    const result = await model.generateContent([prompt, ...imagePArts]);
    const response = await result.response;
  const text = response.text();
  console.log(text);
    
}
imagerun();
