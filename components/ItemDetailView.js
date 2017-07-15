import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, View } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

class ItemDetailView extends Component {
  render() {
    const cardPic = require('../images/test-small.jpg')
    return(
          <Container padder>
              <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{this.props.prescription.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={cardPic} style={{height: 200, width: 300}} />
                    <Icon name="calendar" />
                    <Text>{this.props.prescription.frequency}</Text>
                    <Icon name="pie" />
                    <Text>{this.props.prescription.quantity}</Text>
                    <Icon name="pricetag" />
                    <Text>{this.props.prescription.type}</Text>
                    <Icon name="paper" />
                    <Text>{this.props.prescription.notes}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{color: '#87838B'}} onPress={() => {this.props.updateItem(this.props.prescription)}}>
                      <Icon name="create" />
                      <Text>Edit</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent textStyle={{color: '#87838B'}} onPress={() => {this.props.deleteItem(this.props.prescription.uid)}}>
                      <Icon name="trash" />
                      <Text>Delete</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
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
