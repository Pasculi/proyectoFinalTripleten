import React from 'react'
import './Skeleton.css'

const Skeleton = () => {
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

export default Skeleton
