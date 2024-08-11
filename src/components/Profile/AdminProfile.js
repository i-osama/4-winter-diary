import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminProfile = () => {
  const [view, setView] = useState('profile');

  const handleViewChange = (newView) => {
    setView(newView);
  };

// -------------------------------------------------------
    const profile_url = "https://wallpapers.ispazio.net/wp-content/uploads/2022/09/ispazio-30.jpg";
// -------------------------------------------------------

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <img
            src={profile_url}
            className="rounded-circle mb-3"
            alt="Profile"
            width="180"
            height="180"
          />
          <h3 className="card-title">User's Name</h3>
          <p className="card-text">This is the profile bio. It can be a short description about the user.</p>
          <div className="d-flex justify-content-around mt-4">
            <div onClick={() => handleViewChange('posts')} className="cursor-pointer">
              <h5>Total Posts</h5>
              <p>123</p>
            </div>
            <div onClick={() => handleViewChange('followers')} className="cursor-pointer">
              <h5>Followers</h5>
              <p>456</p>
            </div>
            <div onClick={() => handleViewChange('following')} className="cursor-pointer">
              <h5>Following</h5>
              <p>789</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {view === 'posts' && <div>Show total posts published by the profile owner here.</div>}
        {view === 'followers' && <div>Show followers profiles here.</div>}
        {view === 'following' && <div>Show following profiles here.</div>}
      </div>
    </div>
  );
};

export default AdminProfile;
