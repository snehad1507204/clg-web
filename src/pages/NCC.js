<<<<<<< HEAD
import React from 'react';
import '../styles/ncc.css';

import ncc1 from '../images/ncc1.jpeg';
import ncc2 from '../images/ncc2.jpeg';
import ncc5 from '../images/ncc5.jpeg';
import ncc6 from '../images/ncc6.jpeg';
import ncc7 from '../images/ncc7.jpeg';
import ncc8 from '../images/ncc8.jpeg';

function NCC() {
  return (
    <div className="ncc-page">
      <div className="container">
        <div className="heading1">
          <h1 className="h1">National Cadet Corps (NCC)</h1>
          <p>"Unity and Discipline" – Building Responsible Citizens of Tomorrow</p>
        </div>

        <div className="grid">
          <div className="card">
            <h2>About NCC</h2>
            <p>
              The National Cadet Corps (NCC) at Sw. Narendra Singh Mahavidyalaya aims to develop qualities of leadership,
              discipline, secular outlook, and selfless service among the youth. NCC provides a platform for cadets to serve the nation,
              participate in adventure activities, and build a strong character while contributing to the community.
            </p>
          </div>

          <div className="card">
            <h2>Objectives</h2>
            <ul>
              <li>To instill discipline and leadership qualities in students.</li>
              <li>To create a sense of adventure, courage, and confidence.</li>
              <li>To prepare students for careers in defense and civil services.</li>
              <li>To promote unity, selfless service, and social responsibility.</li>
            </ul>
          </div>
        </div>

        <div className="highlight">Our Motto: Unity and Discipline</div>

        <div className="grid">
          <div className="card">
            <h2>Training Activities</h2>
            <p>
              NCC cadets participate in parades, drill training, weapon training, and adventure sports. Camps such as
              Republic Day Camp, Annual Training Camp, and Trekking Camps help students gain exposure to real-life challenges.
            </p>
          </div>

          <div className="card">
            <h2>Social Service</h2>
            <p>
              Our cadets actively contribute to social awareness campaigns like tree plantation drives, Swachh Bharat
              Abhiyan, blood donation camps, and disaster relief activities, showing their commitment to society.
            </p>
          </div>

          <div className="card">
            <h2>Career Opportunities</h2>
            <p>
              NCC certification benefits students in various competitive exams and defense services. Many cadets get direct
              entry to the armed forces and gain an edge in civil services and public sector jobs.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Enrollment Process</h2>
          <p>
            Students can enroll in NCC by filling out the registration form available at the college office. Selection is
            based on physical fitness, discipline, and dedication to serve the nation. Both male and female students are
            encouraged to join.
          </p>
        </div>

        <div className="highlight">NCC – A Pathway to Discipline, Leadership, and Service</div>
      </div>

      <div className="container">
        {/* NCC Timings */}
        <section>
          <div className="card">
            <h2>NCC Training Timings</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Day">Monday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Drill Practice</td>
                </tr>
                <tr>
                  <td data-label="Day">Wednesday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Physical Training</td>
                </tr>
                <tr>
                  <td data-label="Day">Friday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Weapon Training</td>
                </tr>
                <tr>
                  <td data-label="Day">Saturday</td>
                  <td data-label="Time">8:00 AM - 12:00 PM</td>
                  <td data-label="Activity">Special Parade / Guest Lecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* NCC Events */}
        <section>
          <h2>Our NCC Events</h2>
          <div className="ncc-events">
            <div className="event-card">
              <h3>Independence Day Parade</h3>
              <p>Annual parade with flag hoisting and cultural programs.</p>
            </div>
            <div className="event-card">
              <h3>Blood Donation Camp</h3>
              <p>Organized in collaboration with local hospitals.</p>
            </div>
            <div className="event-card">
              <h3>National Camps</h3>
              <p>Participation in Republic Day Camp, Thal Sainik Camp, etc.</p>
            </div>
            <div className="event-card">
              <h3>Social Service</h3>
              <p>Tree plantation, cleanliness drives, and awareness programs.</p>
            </div>
          </div>
        </section>

        {/* NCC Gallery */}
        <section>
          <h2>NCC Gallery</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src={ncc2} alt="NCC Parade" />
              <div className="caption">NCC Parade</div>
            </div>
            <div className="gallery-item">
              <img src={ncc1} alt="NCC Parade" />
              <div className="caption">NCC Parade</div>
            </div>
            <div className="gallery-item">
              <img src={ncc5} alt="NCC Day" />
              <div className="caption">NCC Day</div>
            </div>
            <div className="gallery-item">
              <img src={ncc6} alt="Tree Plantation" />
              <div className="caption">Tree Plantation</div>
            </div>
            <div className="gallery-item">
              <img src={ncc7} alt="Swachh Bharat" />
              <div className="caption">Swachh Bharat</div>
            </div>
            <div className="gallery-item">
              <img src={ncc8} alt="Guest Lecture" />
              <div className="caption">Guest Lecture</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NCC;
=======
import React from 'react';
import '../styles/ncc.css';

// import ncc1 from './public/images/ncc1.jpeg';
// import ncc2 from '../../public/images/ncc2.jpeg';
// import ncc5 from '../../public/images/ncc5.jpeg';
// import ncc6 from '../../public/images/ncc6.jpeg';
// import ncc7 from '../../public/images/ncc7.jpeg';
// import ncc8 from '../../public/images/ncc8.jpeg';

function NCC() {
  return (
    <div className="ncc-page">
      <div className="container">
        <div className="heading1">
          <h1 className="h1">National Cadet Corps (NCC)</h1>
          <p>"Unity and Discipline" – Building Responsible Citizens of Tomorrow</p>
        </div>
      {/* Top bar for direct connection to NCC website */}
      <div className="ncc-top-bar">
        <h2 className="ncc-top-bar-heading">Official NCC Website</h2>
        <div className="ncc-top-bar-divider">
          <span className="ncc-icon">🎖️</span>
        </div>
        <button className="ncc-top-bar-link" onClick={() => window.open('https://www.bing.com/ck/a?!&&p=4061896f8d9aaebb0e3f558a2ae1002bb661e7491c9c98c4bf6f2155806cd7ebJmltdHM9MTc1NzQ2MjQwMA&ptn=3&ver=2&hsh=4&fclid=32318416-a798-6c22-1a0e-9256a69e6dad&psq=ncc+integrated+software&u=a1aHR0cHM6Ly9uaXMuYmlzYWctbi5nb3YuaW4vbmlzLw', '_blank')}>
          Visit
        </button>
      </div>
        <div className="grid">
          <div className="card">
            <h2>About NCC</h2>
            <p>
              The National Cadet Corps (NCC) at Sw. Narendra Singh Mahavidyalaya aims to develop qualities of leadership,
              discipline, secular outlook, and selfless service among the youth. NCC provides a platform for cadets to serve the nation,
              participate in adventure activities, and build a strong character while contributing to the community.
            </p>
          </div>

          <div className="card">
            <h2>Objectives</h2>
            <ul>
              <li>To instill discipline and leadership qualities in students.</li>
              <li>To create a sense of adventure, courage, and confidence.</li>
              <li>To prepare students for careers in defense and civil services.</li>
              <li>To promote unity, selfless service, and social responsibility.</li>
            </ul>
          </div>
        </div>

        <div className="highlight">Our Motto: Unity and Discipline</div>

        <div className="grid">
          <div className="card">
            <h2>Training Activities</h2>
            <p>
              NCC cadets participate in parades, drill training, weapon training, and adventure sports. Camps such as
              Republic Day Camp, Annual Training Camp, and Trekking Camps help students gain exposure to real-life challenges.
            </p>
          </div>

          <div className="card">
            <h2>Social Service</h2>
            <p>
              Our cadets actively contribute to social awareness campaigns like tree plantation drives, Swachh Bharat
              Abhiyan, blood donation camps, and disaster relief activities, showing their commitment to society.
            </p>
          </div>

          <div className="card">
            <h2>Career Opportunities</h2>
            <p>
              NCC certification benefits students in various competitive exams and defense services. Many cadets get direct
              entry to the armed forces and gain an edge in civil services and public sector jobs.
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Enrollment Process</h2>
          <p>
            Students can enroll in NCC by filling out the registration form available at the college office. Selection is
            based on physical fitness, discipline, and dedication to serve the nation. Both male and female students are
            encouraged to join.
          </p>
        </div>

        <div className="highlight">NCC – A Pathway to Discipline, Leadership, and Service</div>
      </div>

      <div className="container">
        {/* NCC Timings */}
        <section>
          <div className="card">
            <h2>NCC Training Timings</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Day">Monday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Drill Practice</td>
                </tr>
                <tr>
                  <td data-label="Day">Wednesday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Physical Training</td>
                </tr>
                <tr>
                  <td data-label="Day">Friday</td>
                  <td data-label="Time">7:00 AM - 9:00 AM</td>
                  <td data-label="Activity">Weapon Training</td>
                </tr>
                <tr>
                  <td data-label="Day">Saturday</td>
                  <td data-label="Time">8:00 AM - 12:00 PM</td>
                  <td data-label="Activity">Special Parade / Guest Lecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* NCC Events */}
        <section>
          <h2>Our NCC Events</h2>
          <div className="ncc-events">
            <div className="event-card">
              <h3>Independence Day Parade</h3>
              <p>Annual parade with flag hoisting and cultural programs.</p>
            </div>
            <div className="event-card">
              <h3>Blood Donation Camp</h3>
              <p>Organized in collaboration with local hospitals.</p>
            </div>
            <div className="event-card">
              <h3>National Camps</h3>
              <p>Participation in Republic Day Camp, Thal Sainik Camp, etc.</p>
            </div>
            <div className="event-card">
              <h3>Social Service</h3>
              <p>Tree plantation, cleanliness drives, and awareness programs.</p>
            </div>
          </div>
        </section>

        {/* NCC Gallery */}
        <section>
          <h2>NCC Gallery</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src="/images/ncc1.jpeg" alt="NCC Parade" />
              <div className="caption">NCC Parade</div>
            </div>
            <div className="gallery-item">
              <img src="/images/ncc2.jpeg" alt="NCC Training" />
              <div className="caption">NCC Training</div>
            </div>
            <div className="gallery-item">
              <img src="/images/ncc5.jpeg" alt="NCC Day" />
              <div className="caption">NCC Day</div>
            </div>
            <div className="gallery-item">
              <img src="/images/ncc6.jpeg" alt="Tree Plantation" />
              <div className="caption">Tree Plantation</div>
            </div>
            <div className="gallery-item">
              <img src="/images/ncc7.jpeg" alt="Swachh Bharat" />
              <div className="caption">Swachh Bharat</div>
            </div>
            <div className="gallery-item">
              <img src="/images/ncc8.jpeg" alt="Guest Lecture" />
              <div className="caption">Guest Lecture</div>
            </div>
          </div>
        </section>
      </div>
    </div>



  );
}

export default NCC;
>>>>>>> 65dde52 ( commit)
