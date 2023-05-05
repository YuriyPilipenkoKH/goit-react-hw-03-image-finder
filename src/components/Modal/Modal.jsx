import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, ModalImg } from './Modal.styled'


const modalRoot = document.querySelector('#modal-root')
export  class Modal extends Component {
    state = {
        showModal: this.props.showModal,
        
    }

    componentDidMount() {
       
        window.addEventListener('click', this.handleBackdropClick)
        window.addEventListener('keydown', this.handleKeyDown)
        
      } 

      componentWillUnmount() {
       
        window.removeEventListener('click', this.handleBackdropClick)
        window.removeEventListener('keydown', this.handleKeyDown)
        
      } 
    
      handleBackdropClick =(e) => {
        const { showModal } = this.state;
        if((e.target !== e.currentTarget) && showModal){
            return
        }
        else {
            this.props.toggleModal()
        }
      }

      handleKeyDown =(e) => {
        if(e.code === 'Escape') {
            this.props.toggleModal() 
        }
      }
    


  render() {
    return createPortal (
        <Overlay onClick  ={this.handleBackdropClick} className="overlay">
        <ModalImg className="modal">
            <img src={this.props.picture} alt="#" />
        </ModalImg>
        </Overlay>
      ,modalRoot
    )
  }
}
