import React, { Component } from 'react'
import { Icon, Container, Text } from 'native-base'

class Report extends Component {
  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="clipboard" />
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
