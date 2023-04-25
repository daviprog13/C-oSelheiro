import React from 'react'
import {
  StyleHeader,
  StyledRowHeaderTop,
  StyledColHeaderTop,
  FirstText,
  SecondText,
  StyledMidlleHeader,
  InputSearch,
  StyledMidlleColInput,
  AnchorButton
} from './style'
import Image from 'next/image'
import { Typography, Col, Anchor } from 'antd'
const { Link } = Anchor
import { DownOutlined } from '@ant-design/icons'
import HeaderCarousel from '../HeaderCarrousel/HeaderCarousel'

const Header = () => {
  return (
    <StyleHeader>
      <StyledRowHeaderTop justify="space-around" align="middle">
        <StyledColHeaderTop>
          <Image src="/shield.svg" height={20} width={20} alt="shield-icon" />
          <FirstText>Compra &nbsp;</FirstText>
          <SecondText> 100% segura</SecondText>
        </StyledColHeaderTop>
        <StyledColHeaderTop>
          <Image src="/truck.svg" height={20} width={20} alt="shield-icon" />
          <SecondText>Frete grátis &nbsp;</SecondText>
          <FirstText> acima de R$ 200</FirstText>
        </StyledColHeaderTop>
        <StyledColHeaderTop>
          <Image
            src="/cardimage.svg"
            height={20}
            width={20}
            alt="shield-icon"
          />
          <SecondText>Parcele &nbsp;</SecondText>
          <FirstText> suas compras</FirstText>
        </StyledColHeaderTop>
      </StyledRowHeaderTop>
      <StyledMidlleHeader justify="space-around" align="middle">
        <Col>
          <Image src="/logo-cao.svg" height={46} width={178} alt="logo" />
        </Col>
        <StyledMidlleColInput>
          <InputSearch placeholder="O que você está buscando?" />
          <Image src="/glass.svg" height={28} width={28} alt="shield-icon" />
        </StyledMidlleColInput>

        <Col span={4} className="iconsHeader">
          {' '}
          <Typography.Link>
            <Image src="box.svg" height={32} width={32} alt="box-icon" />
          </Typography.Link>
          <Typography.Link>
            <Image src="/heart.svg" height={32} width={32} alt="hearth-icon" />
          </Typography.Link>
          <Typography.Link>
            <Image src="/user.svg" height={32} width={32} alt="user-icon" />
          </Typography.Link>
          <Typography.Link>
            <Image
              src="/shooping-cart.svg"
              height={32}
              width={32}
              alt="user-icon"
            />
          </Typography.Link>
        </Col>
      </StyledMidlleHeader>
      <HeaderCarousel />
      <AnchorButton affix={true}>
        <Anchor.Link href="#1" title={<DownOutlined />} key="1" />
      </AnchorButton>
    </StyleHeader>
  )
}

export default Header
