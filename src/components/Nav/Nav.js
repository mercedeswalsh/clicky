  
import React from 'react'
// needs a context for score
import GridContext from '../../utils/GridContext'

const Nav = _ => {
  return (

        <GridContext>
            {
                ({ score }) => (
                    <>
                        <nav className="navbar navbar-dark bg-dark">
                            <span className="navbar-brand mb-0 h1">Clicky</span>
                            {/* insert {score} */}
                            <span className="navbar-text text-white">Score: {score}</span>
                        </nav>
                    </>
                )
            }
        </GridContext>

  )
}

export default Nav