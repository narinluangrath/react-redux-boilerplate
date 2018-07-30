import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'

import { actionTemplate } from '../actions'

class ContainerTemplate extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  componentDidMount() {
    this.props.action()
  }

  render() {
    console.log('State: ', this.props.state)
    return <div>React-Redux Boilerplate</div>
  }

}

function mapStateToProps({ stateTemplate }) {
  return { state: stateTemplate }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ action: actionTemplate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTemplate)
