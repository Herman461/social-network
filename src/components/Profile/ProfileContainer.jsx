import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addPost, updateNewPostText } from '../../redux/actions';
import { getProfileThunkCreator } from '../../redux/thunks';
import { withAuthRedirect } from '../hoc';
import Profile from './Profile';


class ProfileContainer extends React.Component {

   componentDidMount() {

      const userId = this.props.match.params.userId || 1;
      this.props.getProfileThunkCreator(userId)
   }
   render() {
      return <Profile {...this.props} />
   }
}
 
const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile,
   }
}
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapStateToProps, { addPost, updateNewPostText, getProfileThunkCreator })(WithUrlDataContainerComponent);
