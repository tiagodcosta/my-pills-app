import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Content, Container, Button, Form, Item, Input, Picker } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'


class UpdateItem extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="add-circle" />
  }
  onUpdatePress(){
    const { name, quantity, type, frequency, notes, uid } = this.props

    this.props.saveItem({name, quantity, type, frequency, notes, uid })

  }

  render(){
    return (
      <View showsVerticalScrollIndicator={false}>
        <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20, color: '#44ad8e'}}>Edit your prescription</Text>
        <Form>
             <Item>
               <Input placeholder="Name" value={this.props.name} onChangeText={value => this.props.formUpdate({prop: 'name', value})}/>
             </Item>
             <Item>
               <Input keyboardType="number-pad" placeholder="Dosage" value={this.props.quantity} onChangeText={value => this.props.formUpdate({prop: 'quantity', value})} />
             </Item>
             <Item>
               <Picker
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
           <Button style={{alignSelf: 'center', marginTop: 15, backgroundColor: '#8e44ad'}} onPress={this.onUpdatePress.bind(this)}><Text style={{color: '#fff'}}>Update</Text></Button>
        </Form>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { name, quantity, type, frequency, notes, uid } = state

  return {
    name, quantity, type, frequency, notes, uid
  }
}

export default connect(mapStateToProps, actions)(UpdateItem)
