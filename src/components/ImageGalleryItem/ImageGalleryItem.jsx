import React, { Component } from 'react'

export  class ImageGalleryItem extends Component {


  render() {
    const {id, webformatURL, largeImageURL, tags}  = this.props.item
    return (
        <li key ={id} className="gallery-item">
        <img
         id ={id} 
        src={webformatURL} 
        alt={tags} 
        large ={largeImageURL}/>
        </li>
    )
  }
}



// export  const ImageGalleryItem =(item)=> {
//     return (

//     )
//   }
  