import styled from "styled-components";
import { Card, Typography, Rate, Button, Carousel } from "antd";

export const ContainerAllProducts = styled.div`

`

export const ContainerProduct = styled(Card)`
 width: 235px !important;
 max-width: 235px !important;
 border: none;
 .ant-card-body{
  margin: 0 !important;
 padding: 0 !important;
 }
`

export const PercentagePrice = styled(Typography)`
font-style: normal;
font-weight: 700;
font-size: 14px;
text-align: center;
text-transform: uppercase;
color: #FBB900;
padding: 10px 20px;
background: #FEF6E7;
border-radius: 6px;
z-index: 10;
`
export const ContainerCarousel = styled.div`
display: flex !important;
justify-content: space-between;
`
export const RateHearth = styled(Rate)`
 color: red;
 font-size: 25px;
 z-index: 10;
 .ant-rate-star-second{
  color: #9F9F9F;
 }
`

export const TitleToy = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 14px;
text-align: center;
text-transform: uppercase;
color: #4D4D4D;
max-width: 165px;
margin: 0 auto;
margin-top: 10px !important;
`

export const TitleFrom = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
text-align: center;
text-decoration-line: line-through;
color: #9F9F9F;
margin-top: 14px !important;
`

export const TitleBy = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #4D4D4D;
margin-top: 4px ;
`

export const PriceForSubscribe = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FBB900;
`

export const ButtonAdd = styled(Button)`
font-family: 'Poppins';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #FFFFFF;
margin-top: 14px;
background-color: #FBB900;
width: 100% !important;
height: 48px ;

&:hover{
  color: #FFFFFF !important;
}
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
position: absolute;
bottom: 50%;
left: 0 !important;
z-index: 10;
`

export const BtnRight= styled(Button)`
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
right: 0 !important;
`

export const StyledCarousel = styled(Carousel)`
.slick-dots {
  bottom:-78px !important;
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


/* .slick-dots {
  bottom:50px !important;
}
  .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 4px solid #fff;
    background: transparent;
  }
   .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
  } */