import React from 'react'
import {
  ContainerFooter,
  StyledFirstDiv,
  StyledSecondDiv,
  StyledSTopArea,
  StyledBottomArea,
  StyledText,
  SocialMedia,
  IconLink
} from './styles'
import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import Image from 'next/image'
const TemplateFooter = () => {
  return (
    <ContainerFooter>
      <StyledFirstDiv>
        <StyledText>
          Nos siga nas nossas <br /> redes sociais
        </StyledText>
        <SocialMedia>
          <IconLink href="#">
            <Image src="/face.svg" width={10} height={21} alt="face-icon" />
          </IconLink>
          <IconLink href="#">
            <InstagramOutlined width={22} />
          </IconLink>
          <IconLink href="#">
            <YoutubeOutlined width={22} />
          </IconLink>
        </SocialMedia>
      </StyledFirstDiv>
      <StyledSecondDiv>
        <StyledSTopArea></StyledSTopArea>
        <StyledBottomArea></StyledBottomArea>
      </StyledSecondDiv>
    </ContainerFooter>
  )
}

export default TemplateFooter
