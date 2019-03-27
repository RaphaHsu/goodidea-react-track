import React from 'react';

class HiMessage extends React.Component {
  render() {
    return (
      <div>
        Hi {this.props.name}
      </div>
    );
  }
}

export default HiMessage
