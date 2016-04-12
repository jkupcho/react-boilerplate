import React from 'react';
import { connect } from 'react-redux';
import { DISPATCH_MESSAGE_UPDATE } from '../actions/message';


function Message({message, onChange}) {
  return (
    <div>
      <input onChange={e => onChange(e.target.value)} value={message}/>
      <span>{message}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { message: message };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (message) => {
      dispatch({
        type: DISPATCH_MESSAGE_UPDATE,
        message
      })
    }
  }
}

export default connect(
  state => ({ message: state.message }),
  mapDispatchToProps
)(Message);