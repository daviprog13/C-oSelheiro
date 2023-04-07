import React from 'react'
import { Title } from './styles'
interface Text {
  text: React.ReactNode
}
const AllTitles = (text: Text) => {
  return <Title>{text.text}</Title>
}

export default AllTitles
