import React, { createContext } from 'react'

const GridContext = createContext({
    // state values
    cards: [],
    score: 0,
    image: {}, 
    clicked: false,
    handleCardClick: () => { }

})

export default GridContext