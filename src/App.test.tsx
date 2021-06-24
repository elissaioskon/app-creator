import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('app-container')).toBeInTheDocument()
  })
})
