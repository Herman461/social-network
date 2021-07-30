import React from 'react';
import * as axios from 'axios';

class ProfileStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			statusText: this.props.profile.status
		};
		this.activeEditMode = this.activeEditMode.bind(this);
		this.deactivateEditMode = this.deactivateEditMode.bind(this);
		this.onStatusChange = this.onStatusChange.bind(this);
		this.saveNewStatus = this.saveNewStatus.bind(this);
	}

	onStatusChange(e) {
		this.setState({ statusText: e.target.value });	
	}
	activeEditMode() {
		this.setState({ editMode: true, statusText: this.props.profile.status  });
	}
	deactivateEditMode() {
		this.setState({ editMode: false })
	}
	saveNewStatus() { 
		this.props.setStatusThunkCreator(this.props.profile._id, this.state.statusText);
		this.deactivateEditMode();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.profile.status !== this.props.profile.status) {
			this.setState({ statusText: this.props.profile.status });
		}
	}
	render() {
		return (
			<form action="#" className="info-profile__status status-profile">
				<div className="status-profile__text" onClick={this.activeEditMode}>
					{this.props.profile.status}
				</div>
				{this.state.editMode &&
					<div className="status-profile__body" onMouseLeave={this.deactivateEditMode}>
					<div className="status-profile__input">
						<input autoFocus={true} className="input" 
							value={this.state.statusText}
							onChange={this.onStatusChange}
						/>
					</div>
					<button type="submit" onClick={this.saveNewStatus} className="status-profile__btn">Сохранить</button>
				</div>
				}

			</form>
			
		);
	}
}

export default ProfileStatus;