import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    if (!this.check()) {
      this.state.visible = true;
      this.props.onvisible();
    }
    window.onscroll = () => {
      if (!this.check() && this.state.visible === false) {
        this.setState({ visible: true });
        this.props.onvisible();
      } else if (this.check() && this.state.visible === true) {
        this.setState({ visible: false });
      }
    };
  }
  check() {
    const rect = this.element.getBoundingClientRect();
    return (
      rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth ||
      rect.top > window.innerHeight
    );
  }
  render() {
    return (
      <div ref={(input) => { this.element = input; }}>
        {this.props.children}
      </div>
    );
  }
}

Notify.propTypes = {
  onvisible: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Notify;
