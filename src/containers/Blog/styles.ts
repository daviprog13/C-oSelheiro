import styled from "styled-components";
import { Carousel, Card, Typography, Button,Col } from "antd";

export const ContainerBlog = styled.section`
 max-width:90% !important;
 margin:0 auto;
 margin-top: 80px;
`

export const StyledCarousel = styled(Carousel)`
.slick-dots {
  bottom:-32px !important;
  background-color: transparent !important;
}
  .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 2px solid #9F9F9F;
    background: transparent;
  }
   .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #9F9F9F;
  }
`

export const StyledCard = styled(Card)`
width: 272px !important;
background: #FEF6E7;
border-radius: 0px 0px 20px 20px;
gap: 20px;
`

export const TitleCard = styled(Typography)`
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #4D4D4D;
`

export const TextCard = styled(Typography)`
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #9F9F9F;
`

export const StyledBtnCard = styled(Button)`
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #FFFFFF;
width: 153px;
height: 48px;
background-color: #F0D075;
`

export const BtnBlog = styled(Button)`
background-color: #fbb900;
color: #ffff;
width:153px; 
height: 48px;

font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.08em;
text-transform: uppercase;
margin-top: 24px;
&:hover{
  color: #ffff !important;
  border: none !important;
}
`
export const ContainerImgs = styled.section`
display:flex !important;
justify-content: space-between !important;
`

export const StyledCol = styled(Col)`
position: relative;
`

export const BTNLeft = styled(Button)`
box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);
background: #FFFFFF;
width:32px;
height:32px;
border-radius:50%;
border:none !important;
outline:none !important;
display:flex !important;
justify-content: center !important;
align-items:center;
position: absolute;
bottom: 50%;
left: -20px;
z-index: 10;
`

export const BTNRight = styled(Button)`
box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);
background: #FFFFFF;
width:32px;
height:32px;
border-radius:50%;
border:none !important;
outline:none !important;
display:flex !important;
justify-content: center !important;
align-items:center;
position: absolute;
bottom: 50%;
right: -20px;
z-index: 10;
`