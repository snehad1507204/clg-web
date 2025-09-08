import React from 'react';
import NoticeBoardImg from '../../images/notice-board-img.png';


function NoticeBoard() {
  return (
    <div className="card">
      <div className="heading-sect">
        <h3 className="head-title">Notice Board</h3>
       
      </div>
      <ul className="notice-board-list">
        <li><img src={NoticeBoardImg} alt="new" /> Admissions 2025 – Last Date: 25th August 2025</li>
        <li><img src={NoticeBoardImg} alt="new" />Regular Classes start 1st September 2025</li>
        <li><img src={NoticeBoardImg} alt="new" /> Renovated Library facilities open now</li>
        <li><img src={NoticeBoardImg} alt="new" /> Internal Exams scheduled in November</li>
      </ul>
    </div>
  );
}

export default NoticeBoard;
