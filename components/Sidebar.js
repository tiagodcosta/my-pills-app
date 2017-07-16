import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Content, Left, Right, Container, Icon, List, ListItem } from 'native-base'
import { StackNavigator } from 'react-navigation'

import About from './About'
import Credits from './Credits'
import Contact from './Contact'

const datas = [
  {
    name: "About",
    route: "About",
    icon: "information"
  },
  {
    name: "Credits",
    route: "Credits",
    icon: "list"
  },
  {
    name: "Contact",
    route: "Contact",
    icon: "mail"
  }
]

class SideBar extends Component {

  render() {
    return(
      <Container>
          <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: 50 }}>
              <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem button noBorder onPress={() => this.navigation.navigate(data.route)}>
                    <Left>
                      <Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
                      <Text>{data.name}</Text>
                    </Left>
                    <Right>
                    </Right>
                  </ListItem>}
              />
          </Content>
      </Container>
    )
  }

}



// const SideBar = DrawerNavigator({
//  About: { screen: About },
//  Credits: { screen: Credits },
//  Contact: { screen: Contact }
//  }, {
//    drawerWidth: 500,
//    contentComponent: props =>
//        <ScrollView>
//          <List>
//              <ListItem onPress={() => this.props.navigation.navigate('About')}>
//                  <Text>About</Text>
//                  <Right><Icon name="information" /></Right>
//              </ListItem>
//              <ListItem onPress={() => this.props.navigation.navigate('Credits')}>
//                  <Text>Credits</Text>
//                  <Right><Icon name="list" /></Right>
//              </ListItem>
//              <ListItem onPress={() => this.props.navigation.navigate('Contact')}>
//                  <Text>Contact</Text>
//                  <Right><Icon name="mail" /></Right>
//             </ListItem>
//           </List>
//      </ScrollView>
//
// });

export default SideBar
