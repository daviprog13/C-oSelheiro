import { test } from 'node:test'
import { render, screen } from '@testing-library/react'
import Form from './index'
import React from 'react'

// Jest
test('Quando o input está vazio, não pode enviar o e-mail', () => {
  render(<Form />)
  // encontrar no DOM o input
  const input = screen.getAllByPlaceholderText('Digite seu nome.')
  // encontrar o botão
  const btn = screen.getByRole('button')

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument()
  // garantir que o botão esteja desabilitado
  expect(btn).toBeDisabled()
})
