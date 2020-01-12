import React from 'react'
import GridCards from '../GridCards'
import GridContext from '../../utils/GridContext'

const Grid = _ => {
    return (
        <GridContext.Consumer>
            {
                ({ cards, image, clicked, handleCardClick }) => (
                    <>
                    <div className="row mb-4">
                    {cards.map((card, index) => {
                        return (
                            <GridCards 
                                key={index} 
                                image={image} 
                                clicked={clicked} 
                                handleCardClick={event => handleCardClick(event, index, card.image)} 
                            />
                        )
                    })}
                    </div>
                    </>
                )
            }
        </GridContext.Consumer>
    )
}

export default Grid

// state = { cards }

// shuffleCards() {
//   let [...tempArr] = this.state.cards,
//     currentIndex = tempArr.length,
//     tempValue,
//     randomIndex
  
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor( Math.random() * currentIndex )
//     currentIndex -= 1

//     tempValue = tempArr[currentIndex]
//     tempArr[currentIndex] = tempArr[randomIndex]
//     tempArr[randomIndex] = tempValue
//   }

//   this.setState({ cards: tempArr })

// }

// handleCardClick(event, index, image) {
//   console.log(`Card ${image} has been clicked!`)
//   if (this.state.cards[index].clicked) {
//     swal({
//       title: 'You Lost!',
//       text: `You scored ${this.props.score} point${this.props.score !== 1 ? 's' : ''}!`,
//       icon: 'error',
//       button: 'Okay'
//     })
//     this.setState({ cards: [
//       { image: './assets/images/1.png', clicked: false },
//       { image: './assets/images/2.png', clicked: false },
//       { image: './assets/images/3.png', clicked: false },
//       { image: './assets/images/4.png', clicked: false },
//       { image: './assets/images/5.png', clicked: false },
//       { image: './assets/images/6.png', clicked: false },
//       { image: './assets/images/7.png', clicked: false },
//       { image: './assets/images/8.png', clicked: false },
//       { image: './assets/images/9.png', clicked: false },
//       { image: './assets/images/10.png', clicked: false },
//       { image: './assets/images/11.png', clicked: false },
//       { image: './assets/images/12.png', clicked: false },
//     ]})
//     this.props.resetScore()
//   } else {
//     let [...tempArr] = this.state.cards
//     tempArr[index].clicked = true
//     this.setState({ cards: tempArr })
//     this.props.incrementScore()
//     this.shuffleCards()
//   }
// }