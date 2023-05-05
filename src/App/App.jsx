import React, { Component } from 'react'
import { Container } from 'components/Container/Container'
import Button from 'components/Button/Button'
import { iconLoader } from 'utils/icons'
import { Searchbar } from 'components/Searchbar/Searchbar'
import {fetchCard} from 'servises/fetch'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'


export class App extends Component {
  state = {
    items : [],
    page: 1,
    perPage: 20,
    query: '',
    status: 'idle',
    totalHits: 0,
    total: 0,
    remainder: 0,
  }

  handleSubmit =(searchQuery) => {
  
    this.setState({
      query: searchQuery,
      page: 1,
    })
    const {page, perPage } = this.state
    fetchCard(searchQuery, page, perPage)

    .then(data => {
      const {hits, totalHits, total } = data
      
      this.setState({
        items: hits,
        totalHits: totalHits,
        total: total,
      })
    })
  }

  onLoadMore = (e) => {
    e.preventDefault()
    this.setState(prev =>({page: prev.page +1}))

    const {page, perPage, query } = this.state
    fetchCard(query, page, perPage)
    .then(data => {
      const {hits, totalHits, total } = data
      
      this.setState({
        items: hits,
        totalHits: totalHits,
        total: total,
      })
    })
  }


  render() {
    const {items, totalHits} = this.state
    return (
      <Container>
        <Searchbar onSubmit ={this.handleSubmit}></Searchbar>
        <ImageGallery
         images ={items}
      
        ></ImageGallery>
        
        {totalHits > items.length && (
          <Button  onClick = {this.onLoadMore}>
          {iconLoader}
          Load More </Button>
        )}
        
          
      
      </Container>
    )
  }
}

