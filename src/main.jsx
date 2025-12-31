import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoContext from './context/TodoContext.jsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <TodoContext>
    <App />
  </TodoContext>
)