import React from 'react'
import { ContainerPartners } from './styles'
import { Row } from 'antd'
import { Carousel, Col } from 'antd'
const Partners = () => {
  return (
    <ContainerPartners>
      <Row>
        <Col>
          {' '}
          <Carousel></Carousel>
        </Col>
        <Col></Col>
      </Row>
    </ContainerPartners>
  )
}

export default Partners
