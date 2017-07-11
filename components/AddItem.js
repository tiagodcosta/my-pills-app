import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

class AddItem extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="add-circle" />
  }

  render(){
    return (
      <View>
        <Text>Hello AddItem</Text>
      </View>
    )
  }
}

export default AddItem
