import React, { Component } from 'react'
import { GalleryItem } from './ImageGalleryItem.styled'

export  class ImageGalleryItem extends Component {


  render() {
    const {id, webformatURL, largeImageURL}  = this.props.item
    return (
        <GalleryItem key ={id} className="gallery-item">
        <img
         id ={id} 
        src={webformatURL} 
        alt={largeImageURL} 
       />
        </GalleryItem>
    )
  }
}



// export  const ImageGalleryItem =(item)=> {
//     return (

//     )
//   }
  