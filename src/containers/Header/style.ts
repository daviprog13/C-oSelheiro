import styled from 'styled-components'
import {Layout, Row, Col, Typography, Input, Button, Anchor} from 'antd'

const {Header} = Layout
const { Link } = Anchor

export const StyleHeader = styled(Header)`
background-color: #ffffff; 
padding: 0 !important;
height: 685px !important;
`

export const StyledRowHeaderTop = styled(Row)`
  max-width: 100%;
  margin: 0 auto;
  padding: 11px 0;
  width: 50%;
`

export const StyledColHeaderTop = styled(Col)`
font-size: 24px;
display: flex;
justify-content: center;
align-items: center;

img{
  margin-right: 5px;
}
`
export const FirstText = styled(Typography.Text)`
color: #9F9F9F;
font-weight: 500;
`

export const SecondText = styled(Typography.Text)`
color: #FBB900;
font-weight: 700;
`
export const StyledMidlleHeader = styled(Row)`
 border-top:1px solid #F0F0F0;
 border-bottom:1px solid #F0F0F0;
 .iconsHeader{
  display: flex;
  justify-content:space-between;
  align-items: center !important;
  a:first-child{
    align-self: flex-start;
    margin-bottom:20px;
  }
 }
`

export const StyledMidlleCol = styled(Col)``

export const StyledMidlleColInput = styled(Col)`
 position:relative;
 margin: 12px 0;
 img{
  position: absolute;
  top:15px !important;
  right: 15px !important;
 }
`

export const InputSearch = styled(Input)`
 background: #FEF6E7 !important;
 width: 657px !important;
 height: 48px !important;
 span{
  width: 657px !important;
 } 
`

export const AnchorButton = styled(Anchor)`

  .ant-anchor-link-title{
width: 32px;
height: 32px;
border-radius:50%;
text-align:center;
display: flex;
justify-content:center;
align-items: center !important;
position: relative;
top:-25px;
margin: 0 auto;
box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);
border: none;
z-index: 999;
background-color: #fff;
span{
  margin-top: 10px;
}
}
`

