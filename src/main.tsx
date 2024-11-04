import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'

type Context = '/' | '/repo/'
const BaseContext = createContext<Context>('/repo/')

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <BaseContext.Provider value={import.meta.env.DEV ? '/' : '/repo/'}>
         <App />
      </BaseContext.Provider>
   </React.StrictMode>
)

export const useBaseContext = () => useContext(BaseContext)