import React from 'react'
import { MainContent } from './styles'
import CategoryContentItems from '../MainContentCategory'
import ProductSale from '../ProductsSale'
import TopBrands from '../TopBrands'
import Blog from '../Blog'
import Instagram from '../Instagram'
import Form from '../Form'
const ContentMidle = () => {
  return (
    <MainContent>
      <CategoryContentItems />
      <ProductSale />
      <TopBrands />
      <Blog />
      <Instagram />
      <Form />
    </MainContent>
  )
}

export default ContentMidle
