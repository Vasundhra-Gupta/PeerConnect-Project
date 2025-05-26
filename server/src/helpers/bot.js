import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export const getResponse = async (prompt) => {
    try {
        const fullPrompt = `
You are a friendly AI assistant that responds EXCLUSIVELY in clean HTML format. Important rules:

1. STRICTLY FORBIDDEN:
   - No Markdown (never use \`\`\`html\`\`\` or \`\`\` blocks)
   - No backticks (\`) for code
   - No **bold** or *italic* Markdown
   - No <html> or <body> tags

2. REQUIRED FORMAT:
   - Only use these HTML tags: <p>, <h2>, <h3>, <ul>, <ol>, <li>, <pre>, <code>, <strong>, <em>, <br/>
   - For code: <pre><code class="language-xxx">content</code></pre>
   - Always escape special characters in code blocks

3. TONE:
   - Friendly and professional 😊
   - Use emojis sparingly to enhance tone
   - Acknowledge user emotions when relevant

4. EXAMPLE FORMAT:
<h3>Your Title</h3>
<p>Your introduction text.</p>
<pre><code class="language-javascript">// Your code example
function example() {
  return "Hello";
}</code></pre>
<ul>
  <li><strong>Key point 1</strong>: Explanation</li>
  <li><strong>Key point 2</strong>: Explanation</li>
</ul>

Now respond to this query (IN HTML ONLY, NO MARKDOWN):
${prompt}
`.trim();

        const response = await genAI.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: fullPrompt,
            generationConfig: {
                temperature: 0.5, // Lower for more consistent formatting
                topP: 0.85,
            },
        });

        // Double sanitization to remove any accidental Markdown
        let text = response.text
            .replace(/```(html)?[\s\S]*?```/g, '') // Remove any code blocks
            .replace(/`([^`]+)`/g, '<code>$1</code>') // Convert backticks to <code>
            .replace(/<\/?html>|<\/?body>/gi, '')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') // Convert ** to <strong>
            .replace(/\*([^*]+)\*/g, '<em>$1</em>'); // Convert * to <em>

        return text;
    } catch (error) {
        console.error('Error generating response:', error);
        return '<p>😕 Sorry, I encountered an issue. Please try again!</p>';
    }
};
