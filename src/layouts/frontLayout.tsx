import React from 'react'
import Header from '@/containers/Header/Header'
import { LayoutFront, MainContent } from './styles'
import CategoryContentItems from '@/containers/MainContentCategory'
import TopBrands from '@/containers/TopBrands'
import ProductSale from '@/containers/ProductsSale'
const FrontLayout = () => {
  return (
    <>
      <LayoutFront>
        <Header />
        <MainContent>
          <CategoryContentItems />
          <ProductSale />
          <TopBrands />
        </MainContent>
      </LayoutFront>
    </>
  )
}

export default FrontLayout
