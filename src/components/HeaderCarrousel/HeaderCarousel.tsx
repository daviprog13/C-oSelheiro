import React, { useRef } from 'react'
import { Button, TabsProps } from 'antd'
import Image from 'next/image'
import {
  TabsStyled,
  TabPanel,
  TitleHeader,
  StyledCarousel,
  StyledOfferImg1,
  StyledOfferImg2,
  StyledOfferImg3,
  TitleCarousel,
  ButtonPage1,
  ButtonPref,
  ButtonNext
} from './styles'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const HeaderCarousel = () => {
  const offersSliders: any = useRef(null)
  const SlidertoStroll: any = useRef(null)
  const playSlider: any = useRef(null)
  const toBiteSlider: any = useRef(null)
  const eatSlider: any = useRef(null)
  const homeSlider: any = useRef(null)
  const educationSlider: any = useRef(null)
  const colectionSlider: any = useRef(null)
  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <TabsStyled defaultActiveKey="1" onChange={onChange} tabBarGutter={140}>
      <TabPanel tab="Brincar" key="1">
        <ButtonPref
          type="link"
          onClick={() => {
            playSlider?.current.prev()
          }}
        >
          <Image src="/leftOutlined.svg" width={40} height={40} alt="" />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={playSlider}>
          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            playSlider?.current.next()
          }}
        ></ButtonNext>
      </TabPanel>
      <TabPanel tab="Morder" key="2">
        <ButtonPref
          type="link"
          onClick={() => {
            toBiteSlider?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={toBiteSlider}>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            toBiteSlider?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel tab="Comer" key="3">
        <ButtonPref
          type="link"
          onClick={() => {
            eatSlider?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={eatSlider}>
          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            eatSlider?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel tab="Passear" key="4">
        <ButtonPref
          type="link"
          onClick={() => {
            SlidertoStroll?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={SlidertoStroll}>
          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            SlidertoStroll?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel tab="Casa e conforto" key="5">
        <ButtonPref
          type="link"
          onClick={() => {
            homeSlider?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={homeSlider}>
          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            homeSlider?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel tab="Educação" key="6">
        <ButtonPref
          type="link"
          onClick={() => {
            educationSlider?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={educationSlider}>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            educationSlider?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel tab="Ofertas" key="7">
        <ButtonPref
          type="link"
          onClick={() => {
            offersSliders?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={offersSliders}>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            offersSliders?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
      <TabPanel
        tab={
          <TitleHeader>
            <Image src="/crown.svg" width={20} height={20} alt="icon-crown" />
            Coleção de outono
          </TitleHeader>
        }
        key="8"
      >
        <ButtonPref
          type="link"
          onClick={() => {
            colectionSlider?.current.prev()
          }}
        >
          <LeftOutlined />
        </ButtonPref>
        <StyledCarousel arrows={true} ref={colectionSlider}>
          <StyledOfferImg1>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg1>

          <StyledOfferImg2>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg2>

          <StyledOfferImg3>
            <TitleCarousel>
              As melhores guias para os melhores passeios.
            </TitleCarousel>
            <ButtonPage1>Confira</ButtonPage1>
          </StyledOfferImg3>
        </StyledCarousel>
        <ButtonNext
          type="link"
          onClick={() => {
            colectionSlider?.current.next()
          }}
        >
          <RightOutlined />
        </ButtonNext>
      </TabPanel>
    </TabsStyled>
  )
}

export default HeaderCarousel
