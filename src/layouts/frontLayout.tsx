import React from 'react'
import Header from '@/containers/Header/Header'
import { LayoutFront, MainContent } from './styles'
import CategoryContentItems from '@/containers/MainContentCategory'
import TopBrands from '@/containers/TopBrands'
const FrontLayout = () => {
  return (
    <>
      <LayoutFront>
        <Header />
        <MainContent>
          <CategoryContentItems />
          <TopBrands />
        </MainContent>
      </LayoutFront>
    </>
  )
}

export default FrontLayout
