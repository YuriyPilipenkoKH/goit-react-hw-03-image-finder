import React, { Component } from 'react'
import Notiflix from 'notiflix'
import Button from 'components/Button/Button'
import { iconCatSearch } from 'utils/icons'
import { SearchForm } from './Searchbar.styled'
import { Header } from './Searchbar.styled'

export class Searchbar extends Component {
    state = {
        searchQury: '',
    }

    handleChange = (e) => {
     this.setState({searchQury: e.target.value.trim()})
    }

    handleSubmit =(e) => {
        e.preventDefault()
        if(this.state.searchQury.trim() === '' ) {
            Notiflix.Notify('Enter something')
            return
        }
        this.props.onSubmit(this.state.searchQury)

        this.setState({searchQury: ''})

    }


  render() {
    return (
        <Header className="searchbar">
        <SearchForm 
        onSubmit = {this.handleSubmit}
        className="form">
          <Button type="submit" className="search-btn">
            <span className="button-label">{ iconCatSearch }</span>
          </Button>
      
          <input
            onChange={this.handleChange}
            value = {this.state.searchQury}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    )
  }
}


