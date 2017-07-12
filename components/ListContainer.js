import React, { Component } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Container, Content, List, ListItem, Text, Icon } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

import { ItemDetail } from './ItemDetail'

class ListContainer extends Component {
  static navigationOptions = {
      tabBarLabel: 'Prescriptions',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="medkit" />
  }

  render() {
    const items = this.props.prescriptions

    return(
      <View>
          <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}>List of medications</Text>
          <List dataArray={items}
                renderRow={(item)=>
                  <ListItem onPress={() => props.selectItem(props.prescriptions)}>
                    <Icon name="arrow-dropright-circle" />
                    <Text style={{marginLeft: 5}}>{item.name}</Text>
                  </ListItem>
                }>
          </List>
        </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    prescriptions: state.prescriptions,
    ItemDetail: state.detailView
  }
}

export default connect(mapStateToProps)(ListContainer);
