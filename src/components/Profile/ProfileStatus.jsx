import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [newStatus, setNewStatus] = useState(props.profile.status);
	
	useEffect(() => {
		setNewStatus(props.profile.status);
	}, [editMode]);

	const onStatusChange = (e) => {
		setNewStatus(e.target.value);	
	};
	const activeEditMode = () => {
		setEditMode(true);
	};
	const deactivateEditMode = () => {
		setEditMode(false);
	};
	const saveNewStatus = () => { 
		props.setStatusThunkCreator(newStatus);
		deactivateEditMode();
	};

	return (
		<form action="#" className="info-profile__status status-profile">
			<div className="status-profile__text" onClick={activeEditMode}>
				{props.profile.status}
			</div>
			{editMode &&
				<div className="status-profile__body" onMouseLeave={deactivateEditMode}>
					<div className="status-profile__input">
						<input autoFocus={true} className="input" 
							value={newStatus}
							onChange={onStatusChange}
						/>
					</div>
					<button type="submit" onClick={saveNewStatus} className="status-profile__btn">Сохранить</button>
				</div>
			}
		</form>
			
	);
}

export default ProfileStatus;