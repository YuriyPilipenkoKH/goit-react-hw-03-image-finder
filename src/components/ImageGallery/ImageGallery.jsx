import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import React, { Component } from 'react'

export  class ImageGallery extends Component {

    componentDidMount() {
        window.addEventListener('click', this.handleOpenModal)
      } 

      componentWillUnmount() {
        window.removeEventListener('click', this.handleOpenModal)
      } 
    
      handleOpenModal =(e)=> {
        console.log(e.target.id);
        if(e.target.nodeName === "IMG" ) {
        this.props.toggleModal()
        }
      }



  render() {
    return (
        
    <ul className="gallery">
     {this.props.images.map(i => (
      
        <ImageGalleryItem 
        key ={i.id}
        item = {i}
        />
        ) )}
       
    </ul>
    )
  }
}

// export  class ImageGallery =({images})=> {
      

//   return (

//   )
// }
