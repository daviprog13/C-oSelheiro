import styled from 'styled-components'
import { Tabs, Typography, Carousel, Button } from 'antd'
const TabPane = Tabs.TabPane;
export const TabsStyled = styled(Tabs)`
.ant-tabs-nav-wrap{
  padding:0 56px;
  background:#fff;
  box-shadow: 0px 8px 16px rgba(179, 134, 0, 0.12);
  border-radius: 0px 0px 10px 10px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 12px !important; 
  text-transform:uppercase;
  color: #9F9F9F;
  .ant-tabs-tab,
 .ant-tabs-tab-btn{
  &:hover{
  color: #FBB900 !important;   
  }
 }
 .ant-tabs-tab-active .ant-tabs-tab-btn{
  color: #FBB900 !important;   
 }
 .ant-tabs-tab-active .ant-tabs-tab-btn .ant-typography{
  color: #FBB900 !important;  
  
 }
 .ant-tabs-ink-bar {
  background-color: transparent;
}
}
`

export const TabPanel = styled(TabPane)`
position:relative;
`

export const TitleHeader = styled(Typography)`
 display:flex;
 justify-content: center;
 align-items:center;
 
 &:hover{
  color: #FBB900 !important;   
  transition:.1s ease-in-out;
  }
 img{
   margin-right:12px ;
 }
`

export const StyledCarousel = styled(Carousel)`
position: relative;
top:-11px;
.slick-dots {
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
  }
`

export const StyledOfferImg1 = styled.div`
 background-image:url('/header-image-1.svg') ;
 background-size: cover;
 background-repeat:no-repeat;
 width: 100% !important;
 padding-top:119px;
 padding-bottom:119px;
 padding-left:144px !important;
`

export const StyledOfferImg2 = styled.div`
 background-image:url('/bg-dogs-01.jpg') ;
 background-size: cover;
 background-repeat:no-repeat;
 width: 100% !important;
 padding-top:119px;
 padding-bottom:119px;
 padding-left:144px !important;
`

export const StyledOfferImg3 = styled.div`
 background-image:url('/bg-dogs-02.jpg') ;
 background-size: cover;
 background-repeat:no-repeat;
 width: 100% !important;
 padding-top:119px;
 padding-bottom:119px;
 padding-left:144px !important;
`
export const TitleCarousel = styled(Typography)`
 font-style: normal;
font-weight: 800;
font-size: 40px;
max-width:387px;
color:#fff;

border: none ;
`

export const ButtonPage1 = styled(Button)`
  width:131px !important;
  height:48px !important;
  text-transform: uppercase;
  color: #FFFFFF;
  font-weight: 900;
  font-size: 16px;
  background: #FBB900;

margin-top:24px;
outline:none;
&:hover{
color: #FFFFFF !important;
border: none !important;
}
span{
  &:hover{
color: #FFFFFF;
}
}
`
export const ButtonPref = styled(Button)`
 position: absolute;
 z-index:20;
 top:40% !important;
 left:56px!important;
 font-size:40px;
color:#fff;

`

export const ButtonNext = styled(Button)`
position: absolute;
right: 56px!important;
top:40% !important;
z-index:20;
font-size:40px;
color:#fff;
`