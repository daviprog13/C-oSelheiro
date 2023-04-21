import React, { useRef } from 'react'
import { Carousel, Card, Row, Col, Typography } from 'antd'
import {
  ContainerProduct,
  PercentagePrice,
  RateHearth,
  TitleToy,
  TitleFrom,
  TitleBy,
  PriceForSubscribe,
  ButtonAdd,
  ContainerCarousel,
  ContainerAllProducts,
  BTNLeftRight,
  BtnRight,
  StyledCarousel
} from './styles'
import { HeartOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'

import Image from 'next/image'

const TemplateCarouselProductSale = () => {
  const refCarousel = useRef<null | any>(null)
  const products = [
    {
      pricePerncentage: '40% off',
      iconHeart: <HeartOutlined />,
      imageProduct: '/product-01.png',
      descriptionImageToy: 'Brinquedo Kong Duratreat Ring P',
      priceFrom: 'De R$ 96,69',
      priceBy: 'Por R$ 90,69',
      priceSubscription: {
        price: 'R$ 85,69',
        subscription: 'Para assinantes'
      },
      BTNAdd: 'Adicionar'
    },
    {
      pricePerncentage: '40% off',
      iconHeart: <HeartOutlined />,
      imageProduct: '/product-02.jpg',
      descriptionImageToy:
        'Bola de Tênis Chuckit M - Pack com 2' /* colocar no title e no alt */,
      priceFrom: 'De R$ 96,69',
      priceBy: 'Por R$ 90,69',
      priceSubscription: {
        price: 'R$ 85,69',
        subscription: 'Para assinantes'
      },
      BTNAdd: 'Adicionar'
    },
    {
      pricePerncentage: '40% off',
      iconHeart: <HeartOutlined />,
      imageProduct: '/product-01.png',
      descriptionImageToy: 'Brinquedo Kong Duratreat Ring P',
      priceFrom: 'De R$ 96,69',
      priceBy: 'Por R$ 90,69',
      priceSubscription: {
        price: 'R$ 85,69',
        subscription: 'Para assinantes'
      },
      BTNAdd: 'Adicionar'
    },
    {
      pricePerncentage: '40% off',
      iconHeart: <HeartOutlined />,
      imageProduct: '/product-02.jpg',
      descriptionImageToy: 'Bola de Tênis Chuckit M - Pack com 2',
      priceFrom: 'De R$ 96,69',
      priceBy: 'Por R$ 90,69',
      priceSubscription: {
        price: 'R$ 85,69',
        subscription: 'Para assinantes'
      },
      BTNAdd: 'Adicionar'
    }
  ]
  return (
    <ContainerAllProducts>
      <BTNLeftRight
        onClick={() => {
          refCarousel.current.next()
        }}
      >
        <LeftOutlined />
      </BTNLeftRight>
      <StyledCarousel ref={refCarousel}>
        <ContainerCarousel>
          {products.map(
            ({
              pricePerncentage,
              iconHeart,
              imageProduct,
              descriptionImageToy,
              priceFrom,
              priceBy,
              priceSubscription,
              BTNAdd
            }) => (
              <div>
                <ContainerProduct>
                  <Row justify={'space-between'} align={'middle'}>
                    <PercentagePrice>{pricePerncentage}</PercentagePrice>
                    <RateHearth
                      defaultValue={3}
                      character={iconHeart}
                      count={1}
                    />
                  </Row>
                  <Row justify={'center'}>
                    <Image
                      src={imageProduct}
                      width={180}
                      height={180}
                      alt={descriptionImageToy}
                    />
                  </Row>
                  <Row>
                    <Col span={24}>
                      <TitleToy>{descriptionImageToy}</TitleToy>
                    </Col>
                    <Col span={24}>
                      <TitleFrom>{priceFrom}</TitleFrom>
                    </Col>
                    <Col span={24}>
                      <TitleBy>{priceBy}</TitleBy>
                    </Col>
                    <Col span={24}>
                      <PriceForSubscribe>
                        {priceSubscription.price}{' '}
                        <Typography>
                          {priceSubscription.subscription}
                        </Typography>
                      </PriceForSubscribe>
                    </Col>
                    <Col span={24}>
                      <ButtonAdd>{BTNAdd}</ButtonAdd>
                    </Col>
                  </Row>
                </ContainerProduct>
              </div>
            )
          )}
        </ContainerCarousel>
        <ContainerCarousel>
          {products.map(
            ({
              pricePerncentage,
              iconHeart,
              imageProduct,
              descriptionImageToy,
              priceFrom,
              priceBy,
              priceSubscription,
              BTNAdd
            }) => (
              <div>
                <ContainerProduct>
                  <Row justify={'space-between'} align={'middle'}>
                    <PercentagePrice>{pricePerncentage}</PercentagePrice>
                    <RateHearth
                      defaultValue={3}
                      character={iconHeart}
                      count={1}
                    />
                  </Row>
                  <Row justify={'center'}>
                    <Image
                      src={imageProduct}
                      width={180}
                      height={180}
                      alt={descriptionImageToy}
                    />
                  </Row>
                  <Row>
                    <Col span={24}>
                      <TitleToy>{descriptionImageToy}</TitleToy>
                    </Col>
                    <Col span={24}>
                      <TitleFrom>{priceFrom}</TitleFrom>
                    </Col>
                    <Col span={24}>
                      <TitleBy>{priceBy}</TitleBy>
                    </Col>
                    <Col span={24}>
                      <PriceForSubscribe>
                        {priceSubscription.price}{' '}
                        <Typography>
                          {priceSubscription.subscription}
                        </Typography>
                      </PriceForSubscribe>
                    </Col>
                    <Col span={24}>
                      <ButtonAdd>{BTNAdd}</ButtonAdd>
                    </Col>
                  </Row>
                </ContainerProduct>
              </div>
            )
          )}
        </ContainerCarousel>
        <ContainerCarousel>
          {products.map(
            ({
              pricePerncentage,
              iconHeart,
              imageProduct,
              descriptionImageToy,
              priceFrom,
              priceBy,
              priceSubscription,
              BTNAdd
            }) => (
              <div>
                <ContainerProduct>
                  <Row justify={'space-between'} align={'middle'}>
                    <PercentagePrice>{pricePerncentage}</PercentagePrice>
                    <RateHearth
                      defaultValue={3}
                      character={iconHeart}
                      count={1}
                    />
                  </Row>
                  <Row justify={'center'}>
                    <Image
                      src={imageProduct}
                      width={180}
                      height={180}
                      alt={descriptionImageToy}
                    />
                  </Row>
                  <Row>
                    <Col span={24}>
                      <TitleToy>{descriptionImageToy}</TitleToy>
                    </Col>
                    <Col span={24}>
                      <TitleFrom>{priceFrom}</TitleFrom>
                    </Col>
                    <Col span={24}>
                      <TitleBy>{priceBy}</TitleBy>
                    </Col>
                    <Col span={24}>
                      <PriceForSubscribe>
                        {priceSubscription.price}{' '}
                        <Typography>
                          {priceSubscription.subscription}
                        </Typography>
                      </PriceForSubscribe>
                    </Col>
                    <Col span={24}>
                      <ButtonAdd>{BTNAdd}</ButtonAdd>
                    </Col>
                  </Row>
                </ContainerProduct>
              </div>
            )
          )}
        </ContainerCarousel>
        <ContainerCarousel>
          {products.map(
            ({
              pricePerncentage,
              iconHeart,
              imageProduct,
              descriptionImageToy,
              priceFrom,
              priceBy,
              priceSubscription,
              BTNAdd
            }) => (
              <div>
                <ContainerProduct>
                  <Row justify={'space-between'} align={'middle'}>
                    <PercentagePrice>{pricePerncentage}</PercentagePrice>
                    <RateHearth
                      defaultValue={3}
                      character={iconHeart}
                      count={1}
                    />
                  </Row>
                  <Row justify={'center'}>
                    <Image
                      src={imageProduct}
                      width={180}
                      height={180}
                      alt={descriptionImageToy}
                    />
                  </Row>
                  <Row>
                    <Col span={24}>
                      <TitleToy>{descriptionImageToy}</TitleToy>
                    </Col>
                    <Col span={24}>
                      <TitleFrom>{priceFrom}</TitleFrom>
                    </Col>
                    <Col span={24}>
                      <TitleBy>{priceBy}</TitleBy>
                    </Col>
                    <Col span={24}>
                      <PriceForSubscribe>
                        {priceSubscription.price}{' '}
                        <Typography>
                          {priceSubscription.subscription}
                        </Typography>
                      </PriceForSubscribe>
                    </Col>
                    <Col span={24}>
                      <ButtonAdd>{BTNAdd}</ButtonAdd>
                    </Col>
                  </Row>
                </ContainerProduct>
              </div>
            )
          )}
        </ContainerCarousel>
      </StyledCarousel>
      <BtnRight
        onClick={() => {
          refCarousel.current.next()
        }}
      >
        <RightOutlined />
      </BtnRight>
    </ContainerAllProducts>
  )
}

export default TemplateCarouselProductSale
