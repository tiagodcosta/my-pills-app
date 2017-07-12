import React, { Component } from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Text, Icon, Thumbnail, Button } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

class ItemDetail extends Component {

  handleClick = (link) => {
    Linking.canOpenURL(link).then(supported => {
        if(supported) {
            Linking.openURL(link);
        } else {
          console.log("I can't open" + link);
        }
    })
  }

  render() {
    const items = this.props.prescriptions

    return(
        <Container>
          <Content showsVerticalScrollIndicator={false}>
              <Thumbnail square source={{uri: '../images/test-small.jpg'}} />
              <Text>{this.props.item.name}</Text>
              <Text>{this.props.item.quantity}</Text>
          <View>
              <Text>{this.props.item.type}</Text>
              <Text>{this.props.item.notes}</Text>
          </View>
          <View>
            <Button onPress={() => {this.handleClick(`mailto:#`)}}>
                <Text>Mail</Text>
            </Button>
          </View>
          </Content>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    prescriptions: state.prescriptions,
    itemSelected: state.itemSelected
  }
}

export default connect(mapStateToProps, actions)(ItemDetail);
