import React, { useRef } from 'react'
import {
  ContainerBlog,
  StyledCarousel,
  StyledCard,
  TitleCard,
  BtnBlog,
  ContainerImgs,
  BTNLeft,
  BTNRight,
  StyledCol
} from './styles'
import { Card, Row, Col } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const { Meta } = Card
import Image from 'next/image'
import AllTitles from '@/components/Titles/AllTitles'
const TemplateBlog = () => {
  const refCarousel: any = useRef(null)
  const blogInfo = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      img: (
        <img alt="example" src="/img-1-dogs-blog.png" style={{ width: 272 }} />
      ),
      text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.',
      btn: 'Ler artigo'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      img: (
        <img alt="example" src="/img-2-dogs-blog.png" style={{ width: 272 }} />
      ),
      text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.',
      btn: 'Ler artigo'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      img: (
        <img alt="example" src="/img-3-dogs-blog.png" style={{ width: 272 }} />
      ),
      text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.',
      btn: 'Ler artigo'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      img: (
        <img alt="example" src="/img-4-dogs-blog.png" style={{ width: 272 }} />
      ),
      text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.',
      btn: 'Ler artigo'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      img: (
        <img alt="example" src="/img-2-dogs-blog.png" style={{ width: 272 }} />
      ),
      text: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.',
      btn: 'Ler artigo'
    }
  ]
  return (
    <ContainerBlog>
      <Row>
        <Col span={24}>
          <AllTitles text="Confira o nosso Blog" />
        </Col>
      </Row>
      <Row>
        <StyledCol span={24}>
          <BTNLeft
            onClick={() => {
              refCarousel.current.prev()
            }}
          >
            <LeftOutlined />
          </BTNLeft>
          <StyledCarousel ref={refCarousel}>
            <ContainerImgs>
              {blogInfo.map(({ text, img, title, btn }) => (
                <StyledCard cover={img} hoverable key={text}>
                  <Meta
                    title={<TitleCard>{title}</TitleCard>}
                    description={text}
                  />
                  <BtnBlog>{btn}</BtnBlog>
                </StyledCard>
              ))}
            </ContainerImgs>
            <ContainerImgs>
              {blogInfo.map(({ text, img, title, btn }) => (
                <StyledCard cover={img} hoverable key={text}>
                  <Meta
                    title={<TitleCard>{title}</TitleCard>}
                    description={text}
                  />
                  <BtnBlog>{btn}</BtnBlog>
                </StyledCard>
              ))}
            </ContainerImgs>
          </StyledCarousel>
          <BTNRight
            onClick={() => {
              refCarousel.current.next()
              console.log('teste')
            }}
          >
            <RightOutlined />
          </BTNRight>
        </StyledCol>
      </Row>
    </ContainerBlog>
  )
}

export default TemplateBlog
