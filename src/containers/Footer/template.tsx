import React from 'react'
import {
  ContainerFooter,
  StyledFirstDiv,
  SecondSpace,
  DogTitleFooter
} from './styles'
import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import Image from 'next/image'
const TemplateFooter = () => {
  return (
    <ContainerFooter>
      <StyledFirstDiv>
        <DogTitleFooter>
          &copy; Cão Selheiro Todos direitos reservados
        </DogTitleFooter>
      </StyledFirstDiv>
      <SecondSpace></SecondSpace>
    </ContainerFooter>
  )
}

export default TemplateFooter
