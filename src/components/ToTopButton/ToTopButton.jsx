import React from 'react';
import { TopBtn } from './ToTopButton.styled';
import { iconSwipeup } from 'utils/svgIcons';

class ToTopButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isVisible: false };
      this.handleScroll = this.handleScroll.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll() {
      const { isVisible } = this.state;
      const shouldShow = window.scrollY > 300;
      if (shouldShow && !isVisible) {
        this.setState({ isVisible: true });
      } else if (!shouldShow && isVisible) {
        this.setState({ isVisible: false });
      }
    }
  
    handleClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    render() {
      const { isVisible } = this.state;
      return (
        <TopBtn
          className={`to-top-button ${isVisible && window.scrollY > 0 ? 'visible' : ''}`}
          onClick={this.handleClick}
        >
         { iconSwipeup }
        </TopBtn>
      );
    }
  }
  
  export default ToTopButton;