import OpenAI from 'openai'

console.log('Hello Bun')

const API_KEY = Bun.env.API_KEY
const openai = new OpenAI({
  apiKey: API_KEY
})

const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Hello ChatGPT' }],
  stream: true
})

console.log(stream)
