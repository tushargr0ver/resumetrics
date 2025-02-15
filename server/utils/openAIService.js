const { configDotenv } = require("dotenv");
const { OpenAI } = require("openai");

configDotenv()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

 async function pdfToResult(parsedPdf){
    const system_prompt = `
    You are an AI resume review assistant.
    Return a JSON response with four fields: isResume, score, feedback, and suggestions.
    Check if the input is a resume. If not, set "isResume": false and all other fields to null.
    If it is a resume:
    Set "isResume": true.
    Analyze grammar, clarity, relevance, and overall quality.
    Assign a "score" out of 10.
    Provide "feedback" (max 100 words, concise).
    Give "suggestions" for improvement (max 100 words, concise).
    `

   const response = await client.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[{role: "system", content: system_prompt},
            {role:'user', content: parsedPdf}]})
    
        
        return (response.choices[0].message.content);
        

    
}

module.exports = {pdfToResult}