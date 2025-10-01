
import './App.css'
import Preferences from './components/Preferences'
import TodoList from './components/TodoList'

function App() {


  return (
    <div className='flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900'>
     <div className=''>
     <TodoList/>
     <Preferences/>
     </div>
    </div>
  )
}

export default App
