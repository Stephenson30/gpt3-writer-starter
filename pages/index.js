import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/MastermindBG.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

    const callGenerateEndpoint = async () => {
      setIsGenerating(true);
  
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>LectureMe | STEPHEN</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Easily Digest Medical Courses</h1>
          </div>
          <div className="header-subtitle">
            <h2>Ask Dr Stephen Some Questions</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
          placeholder="Hello, ask me..." 
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText}
          />
          <div className='flex'>
            <div className='support'>
              <a href='https://www.buymeacoffee.com/stephenokwK'>
                <p>Support_Us</p>
              </a>
            </div>
            <div className="prompt-buttons">
              <a className={isGenerating ? 'generate-button loading' : 'generate-button'}
                onClick={callGenerateEndpoint}>
                <div className="generate">
                  {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
                </div>
              </a>
            </div>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Answers</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
