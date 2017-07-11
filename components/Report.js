import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

class Report extends Component {
  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="clipboard" />
  }

  render(){
    return (
      <View>
        <Text>Hello Report</Text>
      </View>
    )
  }
}

export default Report
