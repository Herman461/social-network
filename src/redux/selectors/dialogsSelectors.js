export const getDialogs = (state) => {
	return state.dialogsPage.dialogs;
}

export const getMessages = (state) => {
	return state.dialogsPage.messages;
}

export const getMessageText = (state) => {
	return state.dialogsPage.newMessageText;
}