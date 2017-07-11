import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, List, ListItem, Text } from 'native-base'


export default class ListContainer extends Component {
  render() {
    const items = ['Lexapro', 'Headache', 'CleanTeeth', 'BestDay', 'NoBabies']

    return(
      <View>
          <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}>List of medications</Text>
          <List dataArray={items}
                renderRow={(item)=>
                  <ListItem>
                    <Text>{item}</Text>
                  </ListItem>
                }>
          </List>
        </View>
    )
  }
}
