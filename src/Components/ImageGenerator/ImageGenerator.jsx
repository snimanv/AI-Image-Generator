import React from 'react'
import { useState, useRef } from 'react';

// import { generateImage } from '../../model2_image_generation';
import { generateImage } from '../../model1_image_generation';

import './ImageGenerator.css'
import default_image from '../../assets/default_image.png'

export default function ImageGenerator() {

    const[imageUrl, setImageUrl] = useState("/");
    let inputref = useRef(null);

    const imageGenerator = async() => {
        if (inputref.current.value === null) {
            return 0;
        }

        const response = await generateImage(inputref.current.value);
        // setImageUrl(`data:image/png;base64,${response}`);

        // let data = await response.json();
        const data = await generateImage(inputref.current.value);
        console.log("Generated Image Data:", data);

        const imageURL = URL.createObjectURL(data);
        setImageUrl(imageURL);

    }
        
        // const prompt = inputref.current.value;
        // console.log("Prompt:", prompt);
        // try {
        //     const response = await fetch('http://localhost:8080/generate-image', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ prompt: prompt }),
        //     }
        // )}        catch (error) {
        //     console.error('Error generating image:', error);
        // }  



  return (
    <div className="hero-container">
        <div className="hero-header">
            <p>AI Image <span>Generator</span></p>
        </div>
        <div className="hero-content">
            <div className="image-container">
                <img src={imageUrl==="/"?default_image:imageUrl} alt="Generated AI" className="generated-image"/>
                {/* <img src={default_image} alt="Generated AI" className="generated-image"/> */}
            </div>
            <div className="input-container">
                <input className='input-input' type="text" ref={inputref} placeholder="Enter your prompt here..." />
                <button className='input-button' onClick={() => {imageGenerator()}}>Generate</button>
            </div>
        </div>
    </div>
  )
}
