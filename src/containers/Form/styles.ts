import { Typography, Form, Button } from "antd";
import styled from "styled-components";

export const ContainerForm = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top: 80px;
margin-bottom: 87px;
flex-direction: column;
`

export const FormWidthDescriptions = styled.div`
background: #FEF6E7;
border-radius: 20px;
padding: 40px 226px 32px 215px;
`

export const Title = styled(Typography)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #4D4D4D;
max-width: 319px;
margin-bottom: 24px;
`
export const FormStyled = styled(Form)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.btnSubmit{
  .ant-form-item-row{
    display: flex;
    justify-content: center;
    align-items: center;

    .ant-form-item-control{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
`

export const FormItem = styled(FormStyled.Item)`
width: 343px !important;

input{
background: #FFFFFF;
border: 1px solid #E5E5E5;
border-radius: 10px;
height: 48px;
&::-webkit-input-placeholder {
  padding-left: 27px !important;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #9F9F9F;
}
&:hover{
  outline: none !important;
}
}

.site-form-item-icon{
  font-size:28px;
  color: #9F9F9F;
}

`

export const BtnSubmit = styled(Button)`
background: #FBB900;
border: 1px solid #F0D075;
border-radius: 10px;
font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 21px;
text-align: center;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #FFFFFF;
width: 145px !important;
height: 40px;
&:hover{
  color: #FFFFFF !important;
  border: none !important;
}
`