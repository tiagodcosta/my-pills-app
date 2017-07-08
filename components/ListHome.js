import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'


export default class ListHome extends Component {
  render() {
    const items = ['Lexapro', 'Headache', 'CleanTeeth', 'BestDay', 'NoBabies']

    return(

          <List dataArray={items}
                renderRow={(item)=>
                  <ListItem>
                    <Text>{item}</Text>
                  </ListItem>
                }>
          </List>


    )
  }
}
