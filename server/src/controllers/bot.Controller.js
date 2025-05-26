import { BAD_REQUEST, OK, SERVER_ERROR } from '../constants/errorCodes.js';
import { tryCatch } from '../utils/tryCatch.js';

const quickBot = tryCatch('bot chat', async (req, res) => {
    const { userInput } = req.body;
    if (!userInput) {
        return res.status(BAD_REQUEST).json({ message: 'User input missing' });
    }

    try {
        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'openai/gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content:
                                'You are a helpful assistant that formats all code in proper markdown fenced code blocks, with syntax highlighting hints. Explain technical concepts clearly.',
                        },
                        { role: 'user', content: userInput },
                    ],
                    temperature: 0.7,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return res
                .status(response.status)
                .json({ message: errorData.error?.message || 'API error' });
        }

        const data = await response.json();

        // Send back the raw markdown string
        return res.status(OK).json(data.choices[0].message.content);
    } catch (error) {
        console.error('Error in bot chat:', error);
        return res
            .status(SERVER_ERROR)
            .json({ message: 'Internal server error' });
    }
});

export { quickBot };
