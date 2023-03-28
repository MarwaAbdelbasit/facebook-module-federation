import { registerApplication, start } from 'single-spa'

registerApplication(
    'like',
    () => import('home-like/Like'),
    (location) => location.pathname.startsWith('/'),
  )

start()