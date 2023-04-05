import React from 'react'
import Header from '@/containers/Header/Header'
import { LayoutFront, MainContent } from './styles'
import CategoryContentItems from '@/containers/MainContentCategory'
const FrontLayout = () => {
  return (
    <>
      <LayoutFront>
        <Header />
        <MainContent>
          <CategoryContentItems />
        </MainContent>
      </LayoutFront>
    </>
  )
}

export default FrontLayout
