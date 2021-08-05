import React from 'react';
import ava from '../../assets/img/ava.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
   return (
      <div className="profile__info info-profile">
         <div className="info-profile__column">
            <div className="info-profile__ava">
               <img src={ava} />
            </div>
         </div>
         <div className="info-profile__column">
            <div className="info-profile__name">{props.profile.username} ({props.profile.id})</div>
            <ProfileStatus setStatusThunkCreator={props.setStatusThunkCreator} profile={props.profile} />
         </div>
      </div>
   );
};

export default ProfileInfo;
