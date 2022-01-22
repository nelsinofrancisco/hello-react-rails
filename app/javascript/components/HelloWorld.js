import React from "react"
import { PropTypes } from "prop-types"

const HelloWorld = (props) => {
  const { greeting } = props

  return (
    <React.Fragment>
      Greeting: { greeting }
    </React.Fragment>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
