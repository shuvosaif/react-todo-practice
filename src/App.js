import './App.css'
import { Layout } from './component/layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { About } from './component/page/About'
import { Contact } from './component/page/Contact'
import { AddTask } from './component/page/AddTask'
import { ShowTask } from './component/page/ShowTask'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addTask' element={<AddTask />} />
          <Route path='/showTask' element={<ShowTask />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
