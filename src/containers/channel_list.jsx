import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  // handleClick() {

  // }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setCities }, dispatch);
// }

export default connect(mapStateToProps, null)(ChannelList);
