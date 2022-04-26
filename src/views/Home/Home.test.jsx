import { render, screen, waitFor, watForElementToBeRemoved } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import Layout from '../Layout/Layout'

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

test('Should render the user profile', async () => {
  render(
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
  const headerImage = await screen.findByRole('img', { name: /Alchemy Logo/i })

  const header = await screen.findByRole('heading', { name: /interests/i })
  const list = await screen.findByRole('list')
  return waitFor(() => {
    const avatar = screen.getByRole('img', { name: /avatar/i })
    const name = screen.getByRole('heading', { name: /vonta/i })
    const motto = screen.getByText(/res non verba/i)
  })
})
