import React, { Component } from 'react'
import { Container } from 'components/Container/Container'
import Button from 'components/Button/Button'
import { iconLoader } from 'utils/icons'
import { Searchbar } from 'components/Searchbar/Searchbar'
import {fetchCard} from 'servises/fetch'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Modal } from 'components/Modal/Modal'

export class App extends Component {
  state = {
    items : [],
    query: '',
    status: 'idle',
    totalHits: 0,
    showModal: false,
  }

  handleSubmit =(searchQyery) => {
    this.setState({query: searchQyery})
    fetchCard(searchQyery, 1, 20)

    .then(data => {
      const {hits, totalHits } = data
      
      this.setState({
        items: hits,
        totalHits: totalHits,
      })
    })
  }

  toggleModal =() => {
    this.setState({showModal: !this.state.showModal})
}


  render() {
    const {showModal} = this.state
    return (
      <Container>
        <Searchbar onSubmit ={this.handleSubmit}></Searchbar>
        <ImageGallery
         images ={this.state.items}
         toggleModal ={this.toggleModal}
        ></ImageGallery>
        
        
        <Button>
          {iconLoader}
          Load More </Button>
          {showModal &&   <Modal 
                        toggleModal ={this.toggleModal}
                         ></Modal>}
      
      </Container>
    )
  }
}

