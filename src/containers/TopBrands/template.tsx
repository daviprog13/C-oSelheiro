import React, { MutableRefObject, useRef } from 'react'
import {
  ContainerTopBrands,
  SeeAll,
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
  const clickTopBrands: any = useRef(null)
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
      <Row>
        <StyledCol span={24}>
          <BTNLeft
            onClick={() => {
              clickTopBrands.current.prev()
            }}
          >
            <LeftOutlined />
          </BTNLeft>
          <Carousel ref={clickTopBrands}>
            <div className="positionFlex">
              {topBrands.map(({ img }) => (
                <CardBrands key={undefined}>{img}</CardBrands>
              ))}
            </div>
            <div className="positionFlex">
              {topBrands.map(({ img }) => (
                <CardBrands key={undefined}>{img}</CardBrands>
              ))}
            </div>
          </Carousel>
          <BTNRight
            onClick={() => {
              clickTopBrands.current.next()
            }}
          >
            <RightOutlined />
          </BTNRight>
        </StyledCol>
      </Row>
    </ContainerTopBrands>
  )
}

export default TemplateTopBrands
