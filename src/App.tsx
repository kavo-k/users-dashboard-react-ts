
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'


function App() {
  return (
    <>
      <nav className="appNav">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/users">Пользователи</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path='/users/:userId' element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}


export default App
