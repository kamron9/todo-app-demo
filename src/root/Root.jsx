import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SelectedNote from '../components/SelectedNote'
const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/notes'} />} />
      <Route path='notes' element={<MainPage />} />
      <Route path='notes/:id' element={<SelectedNote />} />
    </Routes>
  )
}

export default Root
