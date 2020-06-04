import React, {useEffect, useContext} from 'react';
import './Profile.scss';
import ProfileImage from '../../assets/images/profile_pic.jpg';
import {UserContext} from '../../contexts/UserContext';
import { MasterContext } from '../../contexts/MasterContext';

const Profile = () => {

    const {userName, setUser} = useContext(UserContext);
    const {fetchData} = useContext(MasterContext);

    useEffect(() => {
        
        fetchData(`http://localhost:5000/api/user`)
            .then((res) => {
                setUser(res);
        });
    }, [fetchData, setUser]);

    return ( 
        <div className="user-profile">
            <img src={ProfileImage} alt="" className="user-profile__image"/>
            {(userName) && (<span className="user-profile__name">{userName}</span>)}
        </div>
     );
}
 
export default Profile;