import React from 'react';
import { Link } from 'react-router-dom';

const PataintList = () => {
  return (
    <div>
      <h2>All Pataint List</h2>
      <Link to="/dashboard/pataintDetails">Go to Single</Link>
    </div>
  );
};

export default PataintList;
