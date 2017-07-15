import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, View, H2 } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

class ItemDetailView extends Component {
  render() {
    return(
          <Container padder>
              <Card style={{flex: 0, backgroundColor: '#44ad8e'}}>
                <CardItem style={{borderBottomColor: '#bdc3c7', borderBottomWidth: 1, backgroundColor: '#44ad8e'}}>
                    <Body>
                      <H2>{this.props.prescription.name}</H2>
                    </Body>
                </CardItem>
                <CardItem style={{backgroundColor: '#44ad8e'}}>
                  <Body>
                    <View style={{flexDirection: "row", width: 150, alignItems: 'center'}}>
                      <Icon name="calendar" style={{marginRight: 10}} />
                      <Text style={{color: '#bdc3c7'}}>{this.props.prescription.frequency}</Text>
                    </View>
                    <View style={{flexDirection: "row", width: 150, alignItems: 'center'}}>
                        <Icon name="pie" style={{marginRight: 10}} />
                        <Text style={{color: '#bdc3c7'}}>{this.props.prescription.quantity} {this.props.prescription.type} </Text>
                    </View>
                    <View style={{flexDirection: "row", width: 300, alignItems: 'center'}}>
                        <Icon name="paper" style={{marginRight: 10}} />
                        <Text style={{color: '#bdc3c7'}}>{this.props.prescription.notes}</Text>
                    </View>
                  </Body>
                </CardItem>
                <CardItem style={{borderTopColor: '#bdc3c7', borderTopWidth: 1, backgroundColor: '#44ad8e'}}>
                  <Left>
                    <Button transparent onPress={() => {this.props.updateItem(this.props.prescription)}}>
                      <Icon style={{color: '#8e44ad'}} name="create" />
                      <Text style={{color: '#8e44ad'}}>Edit</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent onPress={() => {this.props.deleteItem(this.props.prescription.uid)}}>
                      <Icon style={{color: '#8e44ad'}} name="trash" />
                      <Text style={{color: '#8e44ad'}}>Delete</Text>
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
