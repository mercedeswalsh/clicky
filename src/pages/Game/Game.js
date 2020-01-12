import React, { Component, createContext } from 'react'
import GridContext from '../../utils/GridContext'
import Nav from '../../components/Nav'
import Grid from '../../components/Grid'
import swal from 'sweetalert'

class Game extends Component {

    state = {
        cards: [], 
        image: {}, 
        clicked: false, 
        handleCardClick: (event, index, image) => {
            console.log(`Card ${image} has been clicked!`)
            if (this.state.cards[index].clicked) {
              swal({
                title: 'You Lost!',
                text: `You scored ${this.state.score} point${this.state.score !== 1 ? 's' : ''}!`,
                icon: 'error',
                button: 'Okay'
              })
              this.setState({ cards: [
                { image: './assets/images/black.png', clicked: false },
                { image: './assets/images/blue.png', clicked: false },
                { image: './assets/images/darkgrey.png', clicked: false },
                { image: './assets/images/green.png', clicked: false },
                { image: './assets/images/grey.png', clicked: false },
                { image: './assets/images/orange.png', clicked: false },
                { image: './assets/images/pink.png', clicked: false },
                { image: './assets/images/purple.png', clicked: false },
                { image: './assets/images/red.png', clicked: false },
                { image: './assets/images/teal.png', clicked: false },
                { image: './assets/images/white.png', clicked: false },
                { image: './assets/images/yellow.png', clicked: false },
              ]})
              this.props.resetScore()
            } else {
              let [...tempArr] = this.state.cards
              tempArr[index].clicked = true
              this.setState({ cards: tempArr })
              this.props.incrementScore()
              this.shuffleCards()
            }
          },
          incrementScore: () => {
            this.setState({ score: (this.state.score + 1) })
          },
          resetScore: () => {
            this.setState({ score: 0 })
          },
          shuffleCards: () => {
            let [...tempArr] = this.state.cards,
              currentIndex = tempArr.length,
              tempValue,
              randomIndex
            
            while (0 !== currentIndex) {
              randomIndex = Math.floor( Math.random() * currentIndex )
              currentIndex -= 1
        
              tempValue = tempArr[currentIndex]
              tempArr[currentIndex] = tempArr[randomIndex]
              tempArr[randomIndex] = tempValue
            }
        
            this.setState({ cards: tempArr })
        
          },
        score: 0
    }

    render () {
        return (

            // provider
            <GridContext.Provider value={this.state}>

                <>
                <Nav />
                {/* <div className="container">
                    <br/>
                    <br/>
                    <Grid />
                </div> */}
                <Grid />
                </>

            </GridContext.Provider>
        )
    }
}

export default Game