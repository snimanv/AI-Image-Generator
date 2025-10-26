// GOOGLE IMAGEN IMAGE GENERATION

// import { GoogleGenAI } from "@google/genai";
// import * as fs from "node:fs";

// async function main() {

//   const ai = new GoogleGenAI({});

//   const response = await ai.models.generateImages({
//     model: 'imagen-4.0-generate-001',
//     prompt: 'Robot holding a red skateboard',
//     config: {
//       numberOfImages: 1,
//     },
//   });

//   let idx = 1;
//   for (const generatedImage of response.generatedImages) {
//     let imgBytes = generatedImage.image.imageBytes;
//     const buffer = Buffer.from(imgBytes, "base64");
//     fs.writeFileSync(`imagen-${idx}.png`, buffer);
//     idx++;
//   }
// }

// main();


import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

const ai = new GoogleGenAI({
  apiKey: "",
});

export async function generateImage(prompt) {
  const response = await ai.models.generateImages({
    model: "imagen-4.0-generate-001",
    prompt,
    config: {
      numberOfImages: 1,
    },
  });

  // Save the image locally just for confirmation
  const imageBytes = response.generatedImages[0].image.imageBytes;
  const buffer = Buffer.from(imageBytes, "base64");
  fs.writeFileSync("generated.png", buffer);

  // Return the base64 image string
  return imageBytes;
}