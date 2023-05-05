import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import React, { Component } from 'react'
import { GalleryList } from "./ImageGallery.styled"
import { Modal } from "components/Modal/Modal"


export  class ImageGallery extends Component {
    state = {
        showModal: false,
        large: null,
    }
    

    componentDidMount() {
        window.addEventListener('click', this.handleOpenModal)
      } 

      componentWillUnmount() {
        window.removeEventListener('click', this.handleOpenModal)
      } 
    
      handleOpenModal =(e)=> {
        const { showModal } = this.state;
        if((e.target.nodeName === "IMG") &&  !showModal) {
            console.log('alt');
        this.setState({
            large: e.target.alt,
            showModal: true,
        })    
     
        }
        else {
            this.setState({ showModal: false });
        }
      }


      toggleModal =() => {
        this.setState({showModal: !this.state.showModal})
    }
    

  render() {
    const { showModal, large } = this.state;
    return (

        <>
         <GalleryList className="gallery">
     {this.props.images.map(img => (
      
        <ImageGalleryItem 
        key ={img.id}
        item = {img}
        />
        ) )}
       
    </GalleryList>

    {showModal && large &&  <Modal  
                showModal = {this.state.showModal}    
                toggleModal ={this.toggleModal}
                picture = {large}
                ></Modal>}
        </>
        
    )
  }
}


