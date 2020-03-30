import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import styles from './App.css';


class App extends Component {
  state = { 
    isOpen: false
   }

   onHandleOpen = () => {
     this.setState((prev) => ({
       isOpen: !prev.isOpen
     }))
   }
  render() {
    const {isOpen} = this.state
    return (
      <>
      <button onClick={this.onHandleOpen}>AA</button>
      <CSSTransition 
      in={isOpen} 
      timeout={2000} 
      classNames={styles}
      mountOnEnter
      unmountOnExit>
        <div 
        style={{width: 400, height: 400 }}></div>
        </CSSTransition>
      
      </>
      
    );
  }
}

export default App;