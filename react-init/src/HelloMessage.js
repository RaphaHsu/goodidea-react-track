import React from 'react';
import HiMessage from './HiMessage'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <HiMessage name="Mary" />
      </div>
    );
  }
}

export default HelloMessage;
