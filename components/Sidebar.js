import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Content, Left, Right, Container, Icon, List, ListItem } from 'native-base'
import { StackNavigator, DrawerNavigator, DrawerItem  } from 'react-navigation'

import About from './About'
import Credits from './Credits'
import Contact from './Contact'

const Sidebar = DrawerNavigator({
 About: { screen: About },
 Credits: { screen: Credits },
 Contact: { screen: Contact }
 }, {
   contentOptions: {
   drawerPosition: 'left',
   drawerWidth: 100,
   contentComponent: props => {
     return(
       <Container>
             <DrawerItem onPress={() => this.props.navigation.navigate('About')}>
                 <Text>About</Text>
                 <Right><Icon name="information" /></Right>
             </DrawerItem>
             <DrawerItem onPress={() => this.props.navigation.navigate('Credits')}>
                 <Text>Credits</Text>
                 <Right><Icon name="list" /></Right>
             </DrawerItem>
             <DrawerItem onPress={() => this.props.navigation.navigate('Contact')}>
                 <Text>Contact</Text>
                 <Right><Icon name="mail" /></Right>
            </DrawerItem>
     </Container>
     )
   }
 }
});

export default Sidebar
