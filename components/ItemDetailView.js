import React, { Component } from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Text, Icon, Thumbnail, Button } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

class ItemDetailView extends Component {

  render() {
    return(
          <Container showsVerticalScrollIndicator={false}>
              <Thumbnail square source={{uri: '../images/test-small.jpg'}} />
              <Text>{this.props.prescription.name}</Text>
              <Text>{this.props.prescription.quantity}</Text>
              <Text>{this.props.prescription.type}</Text>
              <Text>{this.props.prescription.notes}</Text>

              <Button onPress={() => {this.props.deleteItem(this.props.prescription.uid)}} danger><Text>Delete</Text></Button>
              <Button onPress={() => {this.props.updateItem(this.props.prescription)}}><Text>Edit</Text></Button>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    prescription: state.itemSelected,
    toUpdate: state.toUpdate
  }
}

export default connect(mapStateToProps, actions)(ItemDetailView);
