import { render, screen, waitFor, watForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import App from '../../App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(
    <MemoryRouter>
      <Home user={user} />
    </MemoryRouter>
  )
  const header = screen.findByRole('header', { name: /interests/i })
  const avatar = screen.findByRole('img', { name: /avatar/i })
  const headerImage = screen.findByRole('img', { alt: /Alchemy Logo/i })
  const list = screen.findByRole('list')
  return waitFor(() => {
    const name = screen.getByText(/vonta/i)
    const motto = screen.getByText(/res non verba/i)
  })
})
