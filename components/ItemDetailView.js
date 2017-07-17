import React, { Component } from 'react'
import { TouchableOpacity, Image, Linking } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, View, H2, H3 } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'
import Loader from './Loader'

class ItemDetailView extends Component {
  constructor() {
    super()
    this.state = {
      iodineAPIKey: '5654b09181b03100010000301177b120e8464ddf6ca318b260d87754',
      iodineAPIUrl: '',
      tips: [],
      loading: false
    }
  }

  handleClick = (link) => {
    Linking.canOpenURL(link).then(suppported => {
        if (supported) {
            Linking.openURL(link);
        } else {
            console.log('Don\'t know how to open URI: ' + link)
        }
    })
  }

  componentWillMount() {
    const iodineAPIUrl = 'https://api.iodine.com/drug/' + this.props.prescription.name  + '.json'
    this.setState({iodineAPIUrl});
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    fetch(this.state.iodineAPIUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': this.state.iodineAPIKey
      }
    })
      .then(response => response.json())
      .then(tips => this.setState({
        tips: tips.pharmacistTips,
        loading: false
      }))
      .catch(err => console.error('Some error', err))
  }

  renderLoader() {
    if(this.state.loading) {
      return <Loader size="small" />
    } else if (this.state.tips == null)  {
      return <CardItem>
              <Body>
                <Text>Sorry no tips for this medication :(</Text>
              </Body>
            </CardItem>
    } else {
      return <CardItem>
              <Body>
                <Text>{this.state.tips}</Text>
              </Body>
            </CardItem>
    }
  }


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
                      <Icon style={{color: '#8e44ad', marginRight: 5}} name="create" />
                      <Text style={{color: '#8e44ad'}}>Edit</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent onPress={() => {this.props.deleteItem(this.props.prescription.uid)}}>
                      <Icon style={{color: '#8e44ad', marginRight: 5}} name="trash" />
                      <Text style={{color: '#8e44ad'}}>Delete</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Card style={{flex: 0, backgroundColor: '#44ad8e'}}>
                <CardItem style={{borderBottomColor: '#bdc3c7', borderBottomWidth: 1, backgroundColor: '#44ad8e'}}>
                  <Body>
                    <H3>Tips from pharmacists</H3>
                  </Body>
                </CardItem>
                  {this.renderLoader()}
                <CardItem style={{borderTopColor: '#bdc3c7', borderTopWidth: 1, backgroundColor: '#44ad8e'}}>
                  <Left>
                    <Text>Medical information from <TouchableOpacity  style={{ width: 50, height: 15}} onPress={() => { this.handleClick(`https://www.iodine.com`)}}><Text style={{color: '#8e44ad'}}>Iodine</Text></TouchableOpacity></Text>
                  </Left>
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
