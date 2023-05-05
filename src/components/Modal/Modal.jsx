import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, ModalImg } from './Modal.styled'


const modalRoot = document.querySelector('#modal-root')
export  class Modal extends Component {

    componentDidMount() {
       
        window.addEventListener('click', this.handleBackdropClick)
        window.addEventListener('keydown', this.handleKeyDown)
        
      } 

      componentWillUnmount() {
       
        window.removeEventListener('click', this.handleBackdropClick)
        window.removeEventListener('keydown', this.handleKeyDown)
        
      } 
    
      handleBackdropClick =(e) => {
        if(e.target === e.currentTarget){
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
            <img src="#" alt="#" />
        </ModalImg>
        </Overlay>
      ,modalRoot
    )
  }
}
