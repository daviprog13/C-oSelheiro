import AllTitles from '@/components/Titles/AllTitles'
import React from 'react'
import { Row } from 'antd'
import { ContainerProductSale } from './styles'
const TemplateProductSale = () => {
  return (
    <ContainerProductSale>
      <Row justify={'space-between'} align={'middle'}>
        <AllTitles text="Meu cachorro..." />
      </Row>
    </ContainerProductSale>
  )
}

export default TemplateProductSale
