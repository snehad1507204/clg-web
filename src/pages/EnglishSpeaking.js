import React from 'react';
import '../styles/english-speaking.css';

function EnglishSpeaking() {
  return (
    <main className="english-speaking-container">
      <div className="page-title">
        <h1>English Speaking Course</h1>
        <p>Master English fluency step by step with level-wise learning, from basic conversation to professional communication.</p>
      </div>

      {/* Level 1: Beginner */}
      <section className="level-section">
        <h2>Level 1: Beginner</h2>
        <div className="modules-grid">
          <div className="module-card">
            <h3>Module 1: Fundamentals of English</h3>
            <ul>
              <li>English alphabet, pronunciation, and phonetics</li>
              <li>Basic greetings and self-introduction</li>
              <li>Numbers, dates, and common expressions</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 2: Basic Grammar</h3>
            <ul>
              <li>Simple present, past, and future tense</li>
              <li>Basic sentence formation</li>
              <li>Common verbs, nouns, and adjectives usage</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 3: Everyday Conversations</h3>
            <ul>
              <li>Introducing yourself and others</li>
              <li>Shopping, traveling, and basic social conversations</li>
              <li>Common questions and answers in daily life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Level 2: Intermediate */}
      <section className="level-section">
        <h2>Level 2: Intermediate</h2>
        <div className="modules-grid">
          <div className="module-card">
            <h3>Module 1: Conversational English</h3>
            <ul>
              <li>Role plays for social and professional scenarios</li>
              <li>Polite requests, opinions, and suggestions</li>
              <li>Expressing ideas clearly and confidently</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 2: Advanced Grammar & Vocabulary</h3>
            <ul>
              <li>Complex sentences and clauses</li>
              <li>Common idioms, phrases, and collocations</li>
              <li>Synonyms, antonyms, and word usage practice</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 3: Listening & Pronunciation Skills</h3>
            <ul>
              <li>Understanding native speakers</li>
              <li>Correcting common pronunciation mistakes</li>
              <li>Shadowing and repetition exercises</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Level 3: Advanced */}
      <section className="level-section">
        <h2>Level 3: Advanced</h2>
        <div className="modules-grid">
          <div className="module-card">
            <h3>Module 1: Public Speaking & Presentation</h3>
            <ul>
              <li>Structured speech and presentation skills</li>
              <li>Handling audience questions and feedback</li>
              <li>Storytelling and persuasive communication</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 2: Professional English</h3>
            <ul>
              <li>Business emails and formal communication</li>
              <li>Telephonic and video call etiquette</li>
              <li>Resume writing and interview practice</li>
            </ul>
          </div>
          <div className="module-card">
            <h3>Module 3: Fluency & Confidence Enhancement</h3>
            <ul>
              <li>Debate and group discussion exercises</li>
              <li>Advanced idioms, expressions, and phrasal verbs</li>
              <li>Daily speaking challenges to build confidence</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EnglishSpeaking;
