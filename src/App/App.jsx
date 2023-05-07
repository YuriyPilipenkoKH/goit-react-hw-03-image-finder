import React, { Component } from 'react'
import { Container } from 'components/Container/Container'
import Notiflix from 'notiflix'
import Button from 'components/Button/Button'
import { iconLoader } from 'utils/icons'
import { Searchbar } from 'components/Searchbar/Searchbar'
import {fetchCard} from 'servises/fetch'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Modal } from 'components/Modal/Modal'

export class App extends Component {
  state = {
    items : [],
    page: 1,
    perPage: 12,
    query: '',
    status: 'idle',
    loadindg: false,
    showModal: false,
    showBtn: false,
    largeImgUrl: '',
    error: null,
  }

 
  handleSubmit =(e) => {
    e.preventDefault()

    const reqest = e.target.search.value.trim()
    this.setState({
      query: reqest,
      items : [],
      page: 1,
      loadindg: true,
    })

    if(reqest === ''){
      Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
     return 
    }
    const { perPage} = this.state
    this.fetchGallery(reqest, 1, perPage)

  
}

  onLoadMore = (e) => {
   
    this.setState(prev => {  
      return {
        page: prev.page +1,
        loadindg: true,
      }
      
    })


    const {page, perPage, query } = this.state
   this.fetchGallery(query, page +1, perPage)
   
  }

  onClickImg =(url) => {
    this.setState({
      showModal: true,
      largeImgUrl: url,
    })
  } 

  onModalClose =() => {
    this.setState({
      showModal: false,
      largeImgUrl: '',
    })
  }

  async fetchGallery(query, page, perPage) {
    try {
      const response = await fetchCard(query, page, perPage)
      this.setState(prev => ({items: [...prev.items, ...response]}))
       
      if (response.length < 12) {
        this.setState({showBtn: false})
      }
      if (response.length === 12) {
        this.setState({showBtn: true})
      }
      if (response.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      }

    } catch (error) {
      // Notiflix.Notify.error('xxx')
      this.setState({error})
    }
    finally{
      this.setState({loadindg: false})
    }
  }


  render() {
    const {items, showBtn, showModal, largeImgUrl} = this.state
    return (
      <Container>
        <Searchbar onSubmit ={this.handleSubmit}></Searchbar>
        <ImageGallery
         onClickImg = {this.onClickImg}
         images ={items}
      
        ></ImageGallery>
        
        {showBtn && (
          <Button  onClick = {this.onLoadMore}>
          {iconLoader}
          Load More </Button>
        )}
        
        {showModal &&  <Modal  
                onModalClose = {this.onModalClose}
                picture = {largeImgUrl}
                ></Modal>}
      
      </Container>
    )
  }
}

