import { sendMessage, updateNewMessageText } from '../../redux/actions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc';

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      isAuth: state.auth.isAuth
   }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(AuthRedirectComponent);

export default DialogsContainer;
