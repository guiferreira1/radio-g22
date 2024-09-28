import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Button />
  </StrictMode>,
)
