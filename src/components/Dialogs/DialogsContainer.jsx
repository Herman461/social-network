import { sendMessage, updateNewMessageText } from '../../redux/actions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      isAuth: state.auth.isAuth
   }
}

export default compose(
   connect(mapStateToProps, { updateNewMessageText, sendMessage }),
   withAuthRedirect
)(Dialogs);
