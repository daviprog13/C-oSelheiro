import styled from "styled-components";
import {Layout, Typography, Space} from 'antd'

const {Footer} = Layout

export const ContainerFooter = styled(Footer)`
background-color: #FBB900;
padding: 0;
margin: 0;
display: flex;
`

export const StyledFirstDiv = styled(Space)`
width: 40% !important;
border-right: 1px solid #fff;
`

export const SecondSpace = styled(Space)`
width: 40% !important;
border-right: 1px solid #fff;
`

export const DogTitleFooter = styled(Typography)`
font-size: 25px;
color: #fff;
font-weight: 700;
`