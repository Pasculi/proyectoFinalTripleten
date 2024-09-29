import React from 'react'
import './Skeletons.css'

const Skeletons = () => {
  return (
    <>
      <div className="skeleton-card">
        <div className="skeleton-image" />
        <div className="skeleton-title" />
        <div className="skeleton-vote" />
      </div>
    </>
  );
}

export default Skeletons
