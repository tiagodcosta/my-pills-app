import { StackNavigator, TabNavigator } from 'react-navigation'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

import ListContainer from './ListContainer'
import Report from './Report'
import AddItem from './AddItem'


const Navigation = TabNavigator({
  Prescriptions: { screen: ListContainer },
  Add: { screen: AddItem },
  Report: { screen: Report }
}, {
  tabBarOptions: {
    tabBarPosition: 'bottom',
    activeTintColor: '#fff',
    inactiveBackgroundColor: '#8e44ad',
    activeBackgroundColor: '#8e44ad',
    animationEnabled: true,
    tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("Prescriptions")}>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("AddItem")}>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("Report")}>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
  }
})

export default Navigation
