import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class HeaderMain extends Component {

  render(){
    return(
      <Header>
       <Left>
       </Left>
       <Body>
         <Title style={{color: '#8e44ad'}}>My Pills</Title>
       </Body>
       <Right>
         <Button transparent>
           <Icon style={{color: '#8e44ad'}} name='menu' />
         </Button>
       </Right>
     </Header>
    )
  }
}
