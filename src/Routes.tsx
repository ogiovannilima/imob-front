import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { PATHS } from './Constants/paths'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATHS.contact} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
