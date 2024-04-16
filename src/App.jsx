

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './index.css'



function App() {

  return (
    <>
    <div className=' bg-gradient-to-r from-gray-600 to-white-900 bg-[#172842]  h-screen w-screen  justify-center'>
    <div className=' text-4xl italic text-white flex  justify-center pt-5'>TO DO LIST </div>
      <TaskInput/>
      <TaskList/>
    </div>
    </>
  )
}

export default App

