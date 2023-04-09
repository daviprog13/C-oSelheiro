import styled from "styled-components";
import { Tabs, Typography } from "antd";
import Link from "next/link";
export const ContainerProductSale = styled.section`
 max-width:90% !important;
 margin-top:80px;
 margin:0 auto;
 position: relative;
 .title{
  position: absolute !important;
  top: 10px !important;
  left: 0px !important;
 }
`

export const TabProductSale = styled(Tabs)`
width: 700px!important;
height: 540px !important;
.ant-tabs-content{
 position: absolute;
 left: 0;
 width: 100% !important;
 max-width: 100% !important;
}

.ant-tabs-tab-btn{
  padding: 10px 16px;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
text-align: center;
text-transform: uppercase;
color: #9F9F9F;
&:hover{
  color: #9F9F9F!important;
}
}
.ant-tabs-tab-active .ant-tabs-tab-btn{
  color: #FFF !important;
  background: #FBB900
}
.ant-tabs-ink-bar {
  background-color: transparent !important;
}
.ant-tabs-nav::before{
  border-bottom:1px solid transparent;
}
`

export const SeeAll = styled(Link)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
margin: 0 auto;
margin-top: 36px;
text-decoration-line: underline;
color: #FBB900;
`