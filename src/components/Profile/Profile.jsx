import React from 'react';
import { Redirect } from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import Posts from './Posts';
import AddPostForm from './AddPostForm';

const Profile = (props) => {
   return (
      props.profile && 
      <div className="profile">
         <ProfileInfo setStatusThunkCreator={props.setStatusThunkCreator} profile={props.profile} />
         <AddPostForm addPost={props.addPost} />
         <Posts posts={props.posts} />
      </div>
      
    
   );
};

export default Profile;
