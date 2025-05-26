import { OK } from '../constants/errorCodes.js';
import { getResponse } from '../helpers/bot.js';
import { tryCatch } from '../utils/tryCatch.js';

const quickBot = tryCatch('bot chat', async (req, res) => {
    const { userInput } = req.body;
    if (!userInput) {
        return res.status(400).json({ message: 'user input missing' });
    }
    const response = await getResponse(userInput);
    if (!response) throw new Error(response);
    return res.status(OK).json(response);
});

export { quickBot };
