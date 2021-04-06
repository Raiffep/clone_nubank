import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavButton,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default Menu = ({ translateY }) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <NavButton>
            <Icon name="help-outline" size={20} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton>
            <Icon name="person-outline" size={20} color="#FFF" />
            <NavText>Perfil</NavText>
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton>
            <Icon name="credit-card" size={20} color="#FFF" />
            <NavText>Configurar cartão</NavText>
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton>
            <Icon name="smartphone" size={20} color="#FFF" />
            <NavText>Configuraões do app</NavText>
          </NavButton>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}