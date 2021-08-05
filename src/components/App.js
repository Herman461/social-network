import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../redux/thunks';
import { getInitialized } from '../redux/selectors/appSelectors';

import HeaderContainer from './HeaderContainer';
import { Route } from 'react-router-dom';
import Friends from './pages/Friends';
import Sidebar from './Sidebar';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import LoginContainer from './Login/LoginContainer';
import Preloader from './common/Preloader';

class App extends React.Component {
   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }

      return (
         <div className="wrapper">
            <HeaderContainer />
            <main className="page">
               <div className="page__container _container">
                  <Sidebar />
                  <div className="page__content content-page">
                     <Route
                        render={() => (
                           <ProfileContainer />
                        )}
                        path="/profile/:userId?"
                     />
                     <Route
                        render={() => (
                           <DialogsContainer />
                        )}
                        path="/dialogs"
                     />
                     <Route
                        render={() => (
                           <UsersContainer />
                        )}
                        path="/users"
                     />
                     <Route component={Friends} path="/friends" />
                     <Route component={Music} path="/music" />
                     <Route component={Gallery} path="/gallery" />
                     <Route render={() => <LoginContainer />} path="/login" />
                  </div>
               </div>
            </main>
         </div>
      );
   }
};

const mapStateToProps = (state) => ({
   initialized: getInitialized(state)
})

export default connect(mapStateToProps, { initializeApp })(App);
