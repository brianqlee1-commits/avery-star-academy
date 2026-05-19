import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChooseSubject from './pages/ChooseSubject'
import Quiz from './pages/Quiz'
import LessonFlow from './pages/LessonFlow'
import Rewards from './pages/Rewards'
import Settings from './pages/Settings'
import DayPlanner from './pages/DayPlanner'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseSubject />} />
        <Route path="/quiz/:lang/:subject/:level" element={<Quiz />} />
        <Route path="/lesson/:lang/:subject/:level" element={<LessonFlow />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/planner" element={<DayPlanner />} />
      </Routes>
    </BrowserRouter>
  )
}
