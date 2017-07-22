import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Content, Left, Right, Container, Icon, List, ListItem } from 'native-base'
import Accordion from 'react-native-collapsible/Accordion'

const SECTIONS = [
  {
    name: "About",
    content: "My Pills helps you keep track of your prescriptions",
    icon: "information"
  },
  {
    name: "Credits",
    content: "This app was created by Tiago Costa with the help of React Native, Native Base, React Navigation",
    icon: "list"
  },
  {
    name: "Contact",
    content: "customer@mypills.com",
    icon: "mail"
  }
]

class SideBar extends Component {
  _renderHeader(section) {
    return (
      <View style={{flexDirection: 'row', padding: 5, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#8e44ad'}}>
        <Text style={{color: '#44ad8e'}}>{section.name}</Text>
        <Icon style={{color: '#44ad8e'}} name={section.icon} />
      </View>

    );
  }

  _renderContent(section) {
    return (
      <View style={{padding: 5, marginBottom: 10}}>
        <Text style={{color: '#44ad8e', fontSize: 14}}>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <Content padder style={{marginTop: 40}}>
            <Accordion
              underlayColor="transparent"
              duration={500}
              sections={SECTIONS}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
        </Content>
      </Container>
    )
  }
}

export default SideBar
