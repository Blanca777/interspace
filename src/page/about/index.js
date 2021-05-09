import React, { PureComponent } from 'react'
import {
  AboutWrapper, AboutBox, Devman, DevmanName, DevmanAddress
} from './style'
import capsule from '../../statics/iconpng/capsule.png'
import devman from '../../statics/iconpng/devman.png'
class About extends PureComponent {
  render() {
    return (
      <AboutWrapper>
        <AboutBox>
          <img src={capsule} alt="capsule" />
          <Devman>
            <img src={devman} alt="devman" />
            <DevmanName>blanca</DevmanName>
            <DevmanAddress address="https://github.com/Blanca777" >https://github.com/Blanca777</DevmanAddress>
          </Devman>
        </AboutBox>
      </AboutWrapper>
    )
  }
}

export default About