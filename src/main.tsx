import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import { themes } from './utils/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={themes}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
