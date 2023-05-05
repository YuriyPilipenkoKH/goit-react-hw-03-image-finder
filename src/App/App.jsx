import React, { Component } from 'react'
import { Container } from 'components/Container/Container'
import Button from 'components/Button/Button'
import { iconLoader } from 'utils/icons'

export class App extends Component {
  render() {
    return (
      <Container>
        <Button>
          {iconLoader}
          Load More</Button>
        
      </Container>
    )
  }
}

