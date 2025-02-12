const { configDotenv } = require("dotenv");
const { OpenAI } = require("openai");

configDotenv()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

 async function pdfToResult(parsedPdf){
    const system_prompt = `
    You are an AI assistant to review resumes by user.
    Analysis should strictly be in json.
    Objects are four and names are : isResume, score, feedback, suggestions.
    First check if given text is resume, if not give isResume value false and other objects to be null values.
    Else give isResume true, and analyse resume based on grammar, clarity, relevance, and other important points.
    Then put score object value out of 10.
    Feedback within 100 words (should be concise as possible).
    Suggestions within 100 words(should be concise as possible).
    `

   const response = await client.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[{role: "system", content: system_prompt},
            {role:'user', content: parsedPdf}]})
    
        // console.log(response.choices[0].message.content);
        
        return (response.choices[0].message.content);
        

    
}

module.exports = {pdfToResult}