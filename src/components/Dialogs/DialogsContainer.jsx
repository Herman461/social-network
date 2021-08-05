import { sendMessage } from '../../redux/actions';
import { getIsAuth } from '../../redux/selectors/authSelectors';
import { getDialogs, getMessages, getMessageText } from '../../redux/selectors/dialogsSelectors';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      dialogs: getDialogs(state),
      messages: getMessages(state),
      newMessageText: getMessageText(state),
      isAuth: getIsAuth(state)
   }
}

export default compose(
   connect(mapStateToProps, { sendMessage }),
   withAuthRedirect
)(Dialogs);
