import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`you are pathologist, who have a good skills of interpreting stained body tissues and cells.
Interpret the result of the stained tissues below that have been examined under a light microscope.
Base on their interaction with the special stain stating the special stain used, abnormalities if found, the type of  tissues or cells present,
and diseases the abnormalities might caused. if no question was provided , request for questions.`;

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.1,
    max_tokens: 1056,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
