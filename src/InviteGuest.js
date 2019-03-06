import React, { Component } from 'react';

class InviteGuest extends Component {
  state= {
    guest: '',
    email: ''
  }
  handleInviteName=(event) => {
    this.setState({
      guest: event.target.value
    })
  }
  handleInviteEmail=(event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleSubmitInvite=(event) => {
    event.preventDefault()
    // console.log('handleSubmitInvite', event);
    this.props.invitedGuests(this.state.guest, this.state.email)
  }
  render() {
    const receptionGuests=this.props.receptions.filter(reception=> reception.id === this.props.receptionId)
    // console.log(this.props.guests.map(guest=> guest.reception.id));
    console.log(receptionGuests);

    return (
      <div>
        <form className='nameDateForm' onSubmit={this.handleSubmitInvite}>
          <h4>2: Invite Guests</h4>
          <input placeholder={'Name'} style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleInviteName} value={this.state.guest}/>
          <input placeholder={'Email'} style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleInviteEmail} value={this.state.email}/>
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    );
  }

}

export default InviteGuest;
