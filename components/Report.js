import React, { Component } from 'react'
import { Icon, Container, Text } from 'native-base'

class Report extends Component {
  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-stats" />
  }

  render(){
    return (
      <Container>
        <Text>Hello Report</Text>
      </Container>
    )
  }
}

export default Report
