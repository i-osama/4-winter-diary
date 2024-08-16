import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoPersonCircleOutline } from "react-icons/io5";

const ProfileEditor = () => {
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    profileImage: 'None'
  });

  useEffect(() => {
    // Fetch user data and check if the user is logged in and is the owner
    axios.get('/api/user')
      .then(response => {
        setUser(response.data.user);
        setIsOwner(response.data.isOwner);
        setProfile({
          name: response.data.user.name,
          bio: response.data.user.bio,
          profileImage: response.data.user.profileImage ||  <IoPersonCircleOutline style={{textSize: '105px'}}/>
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile(prevProfile => ({
      ...prevProfile,
      profileImage: URL.createObjectURL(file)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile
    axios.put('/api/user', profile)
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   if (!isOwner) {
//     return <p>You do not have permission to edit this profile.</p>;
//   }

  return (
    <div className="container my-3">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <h2 className='justify-content-center'>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
              {/* <label htmlFor="formProfileImage" className="form-label">Profile Image</label> */}
              <div>
              {profile.profileImage !== 'None' ? (
                  <img
                    src={profile.profileImage}
                    alt="Profile"
                    className="img-thumbnail rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => document.getElementById('formProfileImage').click()}
                  />
                ) : (
                  <IoPersonCircleOutline
                    style={{ fontSize: '150px', cursor: 'pointer' }}
                    onClick={() => document.getElementById('formProfileImage').click()}
                  />
                )}

                
              </div>
              <input
                type="file"
                className="form-control d-none"
                id="formProfileImage"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formName" className="form-label">Name</label>
              <input type="text" className="form-control" id="formName" name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="formBio" className="form-label">Bio</label>
              <textarea className="form-control" id="formBio" name="bio" value={profile.bio} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;
