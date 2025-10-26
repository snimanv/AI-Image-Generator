// HUGGING FACE TEXT-TO-IMAGE GENERATION

// import { InferenceClient } from "@huggingface/inference";

// const client = new InferenceClient(process.env.HF_TOKEN);

// const image = await client.textToImage({
//     provider: "nebius",
//     model: "black-forest-labs/FLUX.1-dev",
// 	inputs: "Astronaut riding a horse",
// 	parameters: { num_inference_steps: 5 },
// });




import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("Your token here");

export async function generateImage(prompt) {
    const image = await client.textToImage({
        provider: "nebius",
        model: "black-forest-labs/FLUX.1-dev",
    	inputs: prompt,
    	parameters: { num_inference_steps: 5 },
    });

    return image;

}