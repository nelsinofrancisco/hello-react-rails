import React from "react"
import { PropTypes } from "prop-types"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { v4 as uuidv4 } from 'uuid';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS'

const getThings = () => {
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST })

    return fetch(`v1/things.json`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error))
  }
}

const HelloWorld = (props) => {
  const { greeting, things } = props
  const thingsList = things.map((things) =>
    <li key={uuidv4()}>{things.name} {things.guid}</li>
  )

  return (
    <React.Fragment>
      Greeting: { greeting }
      <button className='getThingsBtn' onClick={() => props.getThings()}>
        getThings
      </button>
      <br/>
      <ul>{ thingsList }</ul>
    </React.Fragment>
  )
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings }

const getThingsSuccess = (json) => {
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

export { getThingsSuccess }
export default connect(structuredSelector, mapDispatchToProps)(HelloWorld)
