import React from 'react'
import {
  ContainerTopBrands,
  SeeAll,
  ImageStyledRow,
  CardBrands,
  StyledCol,
  BTNLeft,
  BTNRight
} from './styles'
import AllTitles from '@/components/Titles/AllTitles'
import { Row, Col, Carousel } from 'antd'
import Image from 'next/image'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const TemplateTopBrands = () => {
  const topBrands = [
    {
      img: <Image src="/blory.svg" width={81} height={84} alt="blory-icon" />
    },
    {
      img: (
        <Image
          src="/petgames.svg"
          width={128}
          height={36}
          alt="pet-games-icon"
        />
      )
    },
    {
      img: (
        <Image src="/kong.svg" width={123} height={42} alt="pet-games-icon" />
      )
    },
    {
      img: <Image src="/blory.svg" width={81} height={84} alt="blory-icon" />
    },
    {
      img: (
        <Image
          src="/petgames.svg"
          width={128}
          height={36}
          alt="pet-games-icon"
        />
      )
    },
    {
      img: (
        <Image src="/kong.svg" width={123} height={42} alt="pet-games-icon" />
      )
    }
  ]
  return (
    <ContainerTopBrands>
      <Row justify={'space-between'} align={'middle'}>
        <AllTitles text="Principais marcas" />
        <SeeAll href="#">Ver todos</SeeAll>
      </Row>
      <ImageStyledRow>
        <StyledCol span={24}>
          <BTNLeft>
            <LeftOutlined />
          </BTNLeft>
          <Carousel>
            <div className="positionFlex">
              {topBrands.map(({ img }) => (
                <CardBrands>{img}</CardBrands>
              ))}
            </div>
          </Carousel>
          <BTNRight>
            <RightOutlined />
          </BTNRight>
        </StyledCol>
      </ImageStyledRow>
    </ContainerTopBrands>
  )
}

export default TemplateTopBrands
