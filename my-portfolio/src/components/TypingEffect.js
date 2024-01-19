import React, { useState, useEffect, useRef } from 'react';
import SkillsListing from './SkillsListing'; 
import './TypingEffect.css';

const TypingEffect = ({ steps, speed = 100, delay = 2000 }) => {
  const terminalRef = useRef(null); 
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentStepIndex < steps.length) {
      const currentStep = steps[currentStepIndex];
      const commandToType = currentStep.command; // To type only the command, not the prompt
      if (isTyping) {
        if (currentText.length < commandToType.length) {
          const timeoutId = setTimeout(() => {
            setCurrentText(commandToType.slice(0, currentText.length + 1));
          }, speed);
          return () => clearTimeout(timeoutId);
        } else {
          const timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, delay);
          return () => clearTimeout(timeoutId);
        }
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentStepIndex(currentStepIndex + 1);
          setCurrentText('');
          setIsTyping(true);
        }, delay);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentStepIndex, steps, currentText, isTyping, speed, delay]);
  
  // ~~~~~~~~~~~~~~~~~ For scrolling to the bottom ~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    if (terminalRef.current) {
      // To scroll the terminal content to the bottom
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentStepIndex]); // Triggered when currentStepIndex changes
  
  

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-button terminal-button-close"></div>
        <div className="terminal-button terminal-button-minimize"></div>
        <div className="terminal-button terminal-button-expand"></div>
      </div>
      <div className="terminal" ref={terminalRef}>
        {steps.slice(0, currentStepIndex).map((step, index) => (
          <div key={index}>
            <div className="terminal-line">
              <span className="terminal-prompt">{step.prompt}</span>
              <span className="terminal-command">{step.command}</span>
            </div>
            {step.skills && (
              <SkillsListing title={step.prompt} items={step.skills} showTitle={false} />
            )}
          </div>
        ))}
        {currentStepIndex < steps.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">{steps[currentStepIndex].prompt}</span>
            <span className="terminal-command">{currentText}</span>
            <span className="terminal-cursor">{isTyping ? '|' : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};


export default TypingEffect;
