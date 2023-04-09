import styled from "styled-components";
import Link from 'next/link'
import { Row, Card, Col, Button} from "antd";
export const ContainerTopBrands = styled.section`
 max-width:90% !important;
 margin:0 auto;
 margin-top:80px;

`

export const SeeAll = styled(Link)`
font-style: normal;
font-weight: 700;
font-size: 20px;
text-align: center;
text-decoration-line: underline;
color: #FBB900;

&:hover{
  color: #FBB900;
text-decoration-line: underline;
}
`

export const ImageStyledRow = styled(Row)`

`

export const CardBrands = styled(Card)`
width: 178px;
height: 178px;
background: #FFFFFF;
border: 1px solid #E5E5E5;
box-shadow: 0px 8px 16px rgba(179, 134, 0, 0.12);
border-radius: 20px;
display:flex !important;
justify-content: center !important;
align-items:center;
`

export const StyledCol = styled(Col)`
 position: relative;
 .positionFlex{
  display: flex !important;
  justify-content: space-between !important;
 }
`
export const BTNLeft = styled(Button)`
box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);
background: #FFFFFF;
width:32px !important;
height:32px !important;
border-radius:50%;
border:none !important;
outline:none !important;
display:flex !important;
justify-content: center !important;
align-items:center;
position:absolute;
top: 35%;
left: -20px;
z-index:100;
`

export const BTNRight = styled(Button)`
box-shadow: 0px 6px 16px rgba(179, 134, 0, 0.24);
background: #FFFFFF;
width:32px !important;
height:32px !important;
border-radius:50%;
border:none !important;
outline:none !important;
display:flex !important;
justify-content: center !important;
align-items:center;
position:absolute;
top: 35%;
right: -20px;
z-index:100;
`
 
