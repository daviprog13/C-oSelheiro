import React, { useRef } from 'react'
import {
  ContainerMain,
  StyledCarousel,
  CardAntd,
  MetaAntd,
  ContainerImgs,
  StyledCol,
  BTNLeftRight
} from './styles'
import { Row, Col, Carousel } from 'antd'
import AllTitles from '@/components/Titles/AllTitles'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Image from 'next/image'
const CategoryTemplate = () => {
  const playSlider: any = useRef(null)

  const cardObject = [
    {
      img: <Image src="/dog01.svg" width={277} height={277} alt="Brinquedos" />,
      title: 'Brinquedos'
    },
    {
      img: <Image src="/dog02.svg" width={277} height={277} alt="Petiscos" />,
      title: 'Petiscos'
    },
    {
      img: <Image src="/dog03.svg" width={277} height={277} alt="Guias" />,
      title: 'Guias'
    },
    {
      img: <Image src="/dog04.svg" width={277} height={277} alt="Higiene" />,
      title: 'Higiene'
    },
    {
      img: <Image src="/dog01.svg" width={277} height={277} alt="Brinquedos" />,
      title: 'Brinquedos'
    }
  ]
  return (
    <ContainerMain>
      <Row justify={'center'} align={'middle'}>
        <Col span={24}>
          <AllTitles text="Categorias" />
        </Col>
      </Row>
      <Row>
        <StyledCol span={24}>
          <BTNLeftRight
            onClick={() => {
              playSlider.current.prev()
            }}
          >
            <LeftOutlined />
          </BTNLeftRight>
          <StyledCarousel ref={playSlider}>
            <ContainerImgs>
              {cardObject.map(({ img, title }) => (
                <CardAntd hoverable cover={img}>
                  <MetaAntd description={title} />
                </CardAntd>
              ))}
            </ContainerImgs>
            <ContainerImgs>
              {cardObject.map(({ img, title }) => (
                <CardAntd hoverable cover={img}>
                  <MetaAntd description={title} />
                </CardAntd>
              ))}
            </ContainerImgs>
          </StyledCarousel>
          <BTNLeftRight
            onClick={() => {
              playSlider.current.next()
            }}
          >
            <RightOutlined />
          </BTNLeftRight>
        </StyledCol>
      </Row>
    </ContainerMain>
  )
}

export default CategoryTemplate
