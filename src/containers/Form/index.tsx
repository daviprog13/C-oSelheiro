import React from 'react'
import {
  ContainerForm,
  FormWidthDescriptions,
  Title,
  FormStyled,
  FormItem,
  BtnSubmit
} from './styles'
import { Input } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
const Form = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <ContainerForm>
      <Image src="/dog-spy.jpg" width={281} height={104} alt="" />
      <FormWidthDescriptions>
        <Title>Se inscreva para receber novidades e promoções</Title>
        <FormStyled
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <FormItem
            name="username"
            rules={[{ required: true, message: 'Insira seu nome..!!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Digite seu nome."
              style={{ width: 343 }}
            />
          </FormItem>
          <FormItem
            name="email"
            rules={[{ required: true, message: 'Insira seu e-mail..!!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Digite seu E-mail."
              style={{ width: 343, outline: 'none' }}
            />
          </FormItem>
          <FormItem className="btnSubmit">
            <BtnSubmit>Enviar</BtnSubmit>
          </FormItem>
        </FormStyled>
      </FormWidthDescriptions>
    </ContainerForm>
  )
}

export default Form
