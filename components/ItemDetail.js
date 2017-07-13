import React, { Component } from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Text, Icon, Thumbnail, Button } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

class ItemDetail extends Component {

  render() {

    return(
        <Container>
          <Content showsVerticalScrollIndicator={false}>
              <Thumbnail square source={{uri: '../images/test-small.jpg'}} />
              <Text>{this.props.prescription.name}</Text>
              <Text>{this.props.prescription.quantity}</Text>
          <View>
              <Text>{this.props.prescription.type}</Text>
              <Text>{this.props.prescription.notes}</Text>
          </View>
          </Content>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    prescription: state.itemSelected
  }
}

export default connect(mapStateToProps, actions)(ItemDetail);
