import React, { Component } from 'react'
import { Icon, Container, Text } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'
import Loader from './Loader'

const iodineAPIKey = '5654b09181b03100010000301177b120e8464ddf6ca318b260d87754'
const iodineAPIUrl = 'https://api.iodine.com/drug/lexapro.json'

class Report extends Component {
  constructor() {
    super()
    this.state = {
      tips: '',
      loading: false
    }
  }

  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-stats" />
  }



  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch(iodineAPIUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': iodineAPIKey
      }
    })
      .then(response => response.json())
      .then(drugs => console.log(drugs))
      .catch(err => console.error('Some error', err))
  }

  renderLoader() {
    if(this.state.loading) {
      return <Loader size="large" />
    } else {
      return <Text>{this.state.tips}</Text>
    }
  }

  render() {
    return (
      <Container>
          {this.renderLoader()}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const prescriptions = _.map(state.prescriptions, (val, uid) => {
    return { ...val, uid };
  })

  return {
    prescriptions
  };
}

export default connect(mapStateToProps)(Report);
