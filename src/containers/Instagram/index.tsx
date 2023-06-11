import React from 'react'
import { ContainerInstagram, Follow } from './styles'
import { Col, Row } from 'antd'
import AllTitles from '@/components/Titles/AllTitles'
import Image from 'next/image'
const Instagram = () => {
  const objectImage = [
    {
      img: <Image src="/inst-dog-0.png" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog.jpg" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog-0.png" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog.jpg" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog-0.png" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog.jpg" width={240} height={243} alt="" />
    },
    {
      img: <Image src="/inst-dog-0.png" width={240} height={243} alt="" />
    }
  ]
  return (
    <>
      <ContainerInstagram>
        <Row justify={'space-between'}>
          <AllTitles text="Instagram" />
          <Follow href="#">+Seguir</Follow>
        </Row>
      </ContainerInstagram>
      <Row justify={'center'}>
        {objectImage.map(({ img }) => (
          <span key={undefined}>{img}</span>
        ))}
      </Row>
    </>
  )
}

export default Instagram
