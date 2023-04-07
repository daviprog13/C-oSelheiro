import styled from "styled-components";
import {Carousel, Card, Col, Button} from 'antd'


const { Meta } = Card;
export const ContainerMain = styled.section`
 max-width:90% !important;
 margin:0 auto;
 margin-top:80px;
`

export const StyledCarousel = styled(Carousel)`
`
export const ContainerImgs = styled.section`
display:flex !important;
justify-content: space-between !important;
`
export const CardAntd = styled(Card)`
width: 277px !important;
text-align:center;
border:none;
&:hover{
  box-shadow:none !important;
}
`
export const StyledCol = styled(Col)`
position:relative;

button:first-child{
  position: absolute;
  top:32%;
  left:-1%;
  z-index:50;
}
button:last-child{
  position: absolute;
  top:32%;
  right:-1%;
  z-index:50;
}
`
export const MetaAntd = styled(Meta)`
 font-weight: 500;
font-size: 16px;
color:#9F9F9F;
`

export const BTNLeftRight = styled(Button)`
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
`

