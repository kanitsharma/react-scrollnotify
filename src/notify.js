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
      this.element.classList.add(this.props.animation);
    }
    window.addEventListener('scroll', () => {
      if (!this.check() && this.state.visible === false) {
        this.setState({ visible: true });
        this.props.onvisible();
        this.element.classList.add(this.props.animation);
      } else if (this.check() && this.state.visible === true) {
        this.setState({ visible: false });
        this.element.classList.remove(this.props.animation);
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
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

Notify.defaultProps = {
  animation: '',
  onvisible: () => {}
};

Notify.propTypes = {
  onvisible: PropTypes.func,
  children: PropTypes.element.isRequired,
  animation: PropTypes.string
};

export default Notify;
