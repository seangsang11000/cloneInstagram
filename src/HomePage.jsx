import React from 'react'
import "./HomePage.css";

import Slidenav from './components/Navigation/Slidenav';
import Timeline from './components/Timelines/Timeline';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage_slidenav">
        <Slidenav/>
      </div>
      <div className="homepage_timeline">
        <Timeline/>
      </div>
    </div>
  );
}

export default HomePage