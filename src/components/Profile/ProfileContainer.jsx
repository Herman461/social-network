import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { addPost } from '../../redux/actions';
import { getProfileThunkCreator, setStatusThunkCreator } from '../../redux/thunks';
import { withAuthRedirect } from '../hoc';
import { getPosts, getPostText, getProfile} from '../../redux/selectors/profileSelectors.js';
import Profile from './Profile';


class ProfileContainer extends React.Component {
   componentDidMount() {

      // const userId = this.props.match.params.userId || 1;
      this.props.getProfileThunkCreator()
   }
   render() {
      return <Profile {...this.props} />
   }
}
 
const mapStateToProps = (state) => {
   return {
      posts: getPosts(state),
      newPostText: getPostText(state),
      profile: getProfile(state),
   }
}

export default compose(
   connect(mapStateToProps, { addPost, getProfileThunkCreator, setStatusThunkCreator }),
   withRouter,
   withAuthRedirect,
)(ProfileContainer);
