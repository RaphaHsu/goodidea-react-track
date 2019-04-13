import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Header extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="header-block">
        <div className="logo">
          <p>天瓏書局 </p>
          <p className="x-logo"><i className="fas fa-times" /></p>
          <p> 好想工作室</p>
        </div>
        {children}
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  };
}
