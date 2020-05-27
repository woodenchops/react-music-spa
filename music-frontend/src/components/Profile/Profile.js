import React from 'react';
import './Profile.scss';
import ProfileImage from '../../assets/images/profile_pic.jpg';

const Profile = () => {
    return ( 
        <div className="user-profile">
            <img src={ProfileImage} alt="" className="user-profile__image"/>
            <span className="user-profile__name">Kristian</span>
        </div>
     );
}
 
export default Profile;