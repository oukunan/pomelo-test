import { render, screen } from '@testing-library/react'

import Navigation from './Navigation'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

it('renders Home navigation with active className', () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: '/',
  }))
  render(<Navigation />)

  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(2)

  expect(listItems[0]).toHaveClass('navigation__item navigation__item_active')
  expect(listItems[1]).toHaveClass('navigation__item')
})

it('renders About navigation with active className', () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: '/about',
  }))
  render(<Navigation />)

  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(2)

  expect(listItems[0]).toHaveClass('navigation__item')
  expect(listItems[1]).toHaveClass('navigation__item  navigation__item_active')
})
