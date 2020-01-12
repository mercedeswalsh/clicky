import React from 'react'
import GridContext from '../../utils/GridContext'

const GridCards = _ => {
    return (

        <GridContext.Consumer>
        {    
            ({ image, handleCardClick }) => (
                <>
                    <div className="card">
                    <div className="card-body">
                    {/* add image and handleCardClick from context */}
                    <img src={image} onClick={handleCardClick}/>
                    </div>
                    </div>
                </>
            )

        }
        </GridContext.Consumer>


    )
}

export default GridCards