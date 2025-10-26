async function generateImage(prompt) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "API key here",
      "Content-Type": "application/json",
    //   "HTTP-Referer": "https://your-site-url.com", // optional
    //   "X-Title": "Your App Name", // optional
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Generate an image of ${prompt}`,
            },
          ],
        },
      ],
    }),
  });

//   const data = await response.json();
//   console.log("Raw response:", data);

//   // Extract base64 image data
//   const base64Image = data?.choices?.[0]?.message?.content?.[0]?.image_url?.url;

//   if (base64Image) {
//     console.log("Generated Image URL:", base64Image);
//     return base64Image;
//   } else {
//     console.error("No image found in response:", data);
//     return null;
//   }
}

export { generateImage };
