import React from 'react'
import './ImageGenerator.css'
import default_image from '../../assets/default_image.png'

export default function ImageGenerator() {
  return (
    <div className="hero-container">
        <div className="hero-header">
            <p>AI Image <span>Generator</span></p>
        </div>
        <div className="hero-content">
            <div className="image-container">
                <img src={default_image} alt="Generated AI" className="generated-image"/>
            </div>
            <div className="input-container">
                <input className='input-input' type="text" placeholder="Enter your prompt here..." />
                <button className='input-button'>Generate</button>
            </div>
        </div>
    </div>
  )
}
