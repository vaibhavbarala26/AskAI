const { GoogleGenerativeAI }  = require( "@google/generative-ai");
const  { aiConfig } = require("../config/aiConfig");
const genAI = new GoogleGenerativeAI("AIzaSyCuAGJwIw2lALABbH-P68Qn1a4xkAL4syI")
 const textOnly = async(prompt) =>{
    const model = genAI.getGenerativeModel({
        model: aiConfig.gemini.textOnlyModel,
        safetySettings: aiConfig.gemini.safetySettings,
      });
      try{
        const result = await model.generateContent(prompt)
        const chatReponse = result?.response?.text();
        return {result:chatReponse}
      }
      catch(e){
        console.log("textOnly | error" , e);
        return {Error:"UH OH"};
      }
};
module.exports = textOnly