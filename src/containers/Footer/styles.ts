import styled from "styled-components";
import {Layout, Typography} from 'antd'

const {Footer} = Layout

export const ContainerFooter = styled(Footer)`
background-color: #FBB900;
padding: 0;
margin: 0;
display: flex;
`

export const StyledFirstDiv = styled.div`
width: 40% !important;
border-right: 1px solid #fff;
`
export const StyledSecondDiv = styled.div``
export const StyledSTopArea = styled.div``
export const StyledBottomArea = styled.div``
export const StyledText = styled(Typography)`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #FFFFFF;
`

export const SocialMedia = styled.div`
display: flex;
`

export const IconLink = styled(Typography.Link)``