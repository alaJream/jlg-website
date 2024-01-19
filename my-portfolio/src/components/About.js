import React from 'react';
import TypingEffect from './TypingEffect';
import './About.css';

const About = () => {
  const typingSteps = [
    { prompt: 'jeremysportfolio$', command: ' cat aboutjeremy' },
    { prompt: 'aboutjeremy(main)$', command: ' Hello! I\'m Jeremy. I\'m striving to be a Full Stack Developer. I love coding and everything tech!' },
    { prompt: 'aboutjeremy(main)$', command: ' cd skills/tools' },
    { prompt: 'skills/tools(main)$', command: ' ls' },
    
    { 
      prompt: 'Languages:', 
      command: '', 
      skills: ['Javascript', 'Swift', 'Typescript', 'HTML & CSS'] 
    },
    { 
      prompt: 'Frameworks:', 
      command: '', 
      skills: ['SwiftUI', 'UIKit', 'React', 'React Native', 'Django', 'Flask', 'D3.js', 'Node.js'] 
    },
    { 
      prompt: 'Tools:', 
      command: '', 
      skills: ['Github', 'Heroku', 'Vercel', 'Google CoLab', 'Xcode', 'VScode'] 
    },
    { 
      prompt: 'Databases:', 
      command: '', 
      skills: ['MySQL', 'PostgresSQL', 'MongoDB'] 
    },
    { prompt: 'aboutjeremy(main)$', command: ' cd hobbies/interests' },
    { prompt: 'hobbies/interests(main)$', command: ' ls' },
    { 
      prompt: 'hobbies/interests:', 
      command: '', 
      skills: ['🎾 Tennis', '🏃🏽‍♂️ Running', '🏋🏽 Working out', '🧑🏽‍🍳 Cooking', '🍽️ Eating'] 
    },
    
  ];

  return (
    <div className="about-container">
      <TypingEffect
        steps={typingSteps}
        speed={100}
      />
    </div>
  );
};

export default About;
