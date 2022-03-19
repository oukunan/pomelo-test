import { render, screen } from '@testing-library/react'
import Home from '.'

it('should passed', () => {
  render(<Home />)

  expect(screen.queryByText(/hello home/i)?.textContent).toBe('Hello Home')
})
