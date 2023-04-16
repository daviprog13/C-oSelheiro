import React from 'react'
import Header from '@/containers/Header/Header'
import { LayoutFront, MainContent } from './styles'
import CategoryContentItems from '@/containers/MainContentCategory'
import TopBrands from '@/containers/TopBrands'
import ProductSale from '@/containers/ProductsSale'
import Partners from '@/containers/Partners'
import Blog from '@/containers/Blog'
import Instagram from '@/containers/Instagram'
import Form from '@/containers/Form'
const FrontLayout = () => {
  return (
    <>
      <LayoutFront>
        <Header />
        <MainContent>
          <CategoryContentItems />
          <ProductSale />
          <TopBrands />
          {/* <Partners /> */}
          <Blog />
          <Instagram />
          <Form />
        </MainContent>
      </LayoutFront>
    </>
  )
}

export default FrontLayout
