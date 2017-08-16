import React, { Component } from 'react'
import { Icon, Content, Container, Button, Form, Item, Input, Text, Picker, Header, Left, Right, Body, Title } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'
import PropTypes from 'prop-types'

class AddItem extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-add-circle" />
  }
  onAddPress(){
    const { name, quantity, type, frequency, notes } = this.props

    this.props.createNewItem({name, quantity, type, frequency, notes})

    this.props.navigation.navigate('Prescriptions')
  }

  render(){
    return (
      <Container showsVerticalScrollIndicator={false}>
        <Content padder>
          <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20, fontSize: 18, color: '#44ad8e'}}>Add new prescription</Text>
        <Form>
           <Item>
             <Input placeholder="Name" value={this.props.name} onChangeText={value => this.props.formUpdate({prop: 'name', value})}/>
           </Item>
           <Item>
             <Input keyboardType="number-pad" placeholder="Dosage" value={this.props.quantity} onChangeText={value => this.props.formUpdate({prop: 'quantity', value})} />
           </Item>
           <Item>
             <Picker
                renderHeader={backAction =>
                    <Header style={{ backgroundColor: "#fff" }}>
                      <Left>
                        <Button transparent onPress={backAction}>
                          <Icon name="arrow-back" style={{ color: "#8e44ad" }} />
                        </Button>
                      </Left>
                      <Body style={{ flex: 3 }}>
                        <Title style={{ color: "#8e44ad" }}>Please choose one</Title>
                      </Body>
                      <Right />
                    </Header>}
                mode="dropdown"
                placeholder="Unit"
                selectedValue={this.props.type}
                onValueChange={value => this.props.formUpdate({prop: 'type', value})}
              >
                <Item label="Pill" value="Pill" />
                <Item label="Drop" value="Drop" />
                <Item label="Patch" value="Patch" />
                <Item label="Teaspoon" value="Teaspoon" />
                <Item label="Tablespoon" value="Tablespoon" />
            </Picker>
           </Item>
           <Item>
             <Picker
                renderHeader={backAction =>
                    <Header style={{ backgroundColor: "#fff" }}>
                      <Left>
                        <Button transparent onPress={backAction}>
                          <Icon name="arrow-back" style={{ color: "#8e44ad" }} />
                        </Button>
                      </Left>
                      <Body style={{ flex: 3 }}>
                        <Title style={{ color: "#8e44ad" }}>Please choose one</Title>
                      </Body>
                      <Right />
                    </Header>}
                mode="dropdown"
                placeholder="Frequency"
                selectedValue={this.props.frequency}
                onValueChange={value => this.props.formUpdate({prop: 'frequency', value})}
              >
                <Item label="Once a day" value="Once a day" />
                <Item label="Twice a day" value="Twice a day" />
                <Item label="Three times a day" value="Three times a day" />
                <Item label="Four times a day" value="Four times a day" />
                <Item label="Each hour" value="Each hour" />
            </Picker>
           </Item>
           <Item last>
             <Input placeholder="Notes" value={this.props.notes} onChangeText={value => this.props.formUpdate({prop: 'notes', value})} />
           </Item>
             <Button style={{alignSelf: 'center', marginTop: 15, backgroundColor: '#8e44ad'}} onPress={this.onAddPress.bind(this)}><Text>Add prescription</Text></Button>
        </Form>
      </Content>
      </Container>
    )
  }
}

AddItem.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  const { name, quantity, type, frequency, notes } = state

  return {
    name, quantity, type, frequency, notes
  }
}

export default connect(mapStateToProps, actions)(AddItem)
