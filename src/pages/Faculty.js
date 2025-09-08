import React from 'react';

// Dummy data for faculty
const faculty = [
  { id: 1, name: 'Dr. John Doe', subject: 'Computer Science', bio: 'Expert in AI and machine learning.' },
  { id: 2, name: 'Prof. Jane Smith', subject: 'Mathematics', bio: 'Specializes in algebra and calculus.' },
  { id: 3, name: 'Dr. Alice Johnson', subject: 'Physics', bio: 'Researcher in quantum physics.' },
];

function Faculty() {
  return (
    <div className="faculty">
      <h1>Our Faculty</h1>
      <div className="faculty-list">
        {faculty.map(member => (
          <div key={member.id} className="faculty-card">
            <h2>{member.name}</h2>
            <p><strong>Subject:</strong> {member.subject}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
