import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Text, Container } from 'native-base'

export default class AddButton extends Component {
  render(){
    return(
        <Button rounded danger style={{alignSelf: 'center', marginTop: 50}}>
          <Text>Add new medicine</Text>
        </Button>
    )
  }
}
