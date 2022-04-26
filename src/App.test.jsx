import { render, screen, waitFor, watForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  test('Should render the header', async () => {
    render(<App />)
    const header = await screen.findByRole('banner')
    const headerImage = await screen.findByRole('img', { alt: /Alchemy Logo/i })

    return waitFor(() => {
      const headerText = screen.getByLabelText(/meet vonta/i)
    })
  })
})
