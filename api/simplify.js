export default async function handler(req, res) {
    const userText = req.body.text;
    const usergradeLevel = req.body.gradeLevel

    const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1000,
            messages: [
                {role: "user", content: `Simplify this text to a grade ${usergradeLevel} reading level: ${userText}`}
            ]
        })})
    const data = await response.json();
    const simplifiedText = data.content[0].text;

    res.status(200).json({simplifiedText: simplifiedText});
}
