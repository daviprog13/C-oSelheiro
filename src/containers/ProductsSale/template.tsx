import AllTitles from '@/components/Titles/AllTitles'
import React from 'react'
import { Row } from 'antd'
import { ContainerProductSale, TabProductSale, SeeAll } from './styles'
import type { TabsProps } from 'antd'
import CarouselProductSale from './CarouselProductSale'
const TemplateProductSale = () => {
  const onChange = (key: string) => {
    console.log(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `É agitado`,
      children: <CarouselProductSale />
    },
    {
      key: '2',
      label: `Morde`,
      children: <CarouselProductSale />
    },
    {
      key: '3',
      label: `Late muito`,
      children: <CarouselProductSale />
    },
    {
      key: '4',
      label: `É Ansioso`,
      children: <CarouselProductSale />
    },
    {
      key: '5',
      label: `É estressado`,
      children: <CarouselProductSale />
    }
  ]
  return (
    <ContainerProductSale>
      <div>
        <Row justify={'end'}>
          <div className="title">
            <AllTitles text="Meu cachorro..." />
          </div>
          <TabProductSale
            defaultActiveKey="1"
            onChange={onChange}
            items={items}
          />
        </Row>
        <Row>
          <SeeAll href="#">Ver todos</SeeAll>
        </Row>
      </div>
    </ContainerProductSale>
  )
}

export default TemplateProductSale
