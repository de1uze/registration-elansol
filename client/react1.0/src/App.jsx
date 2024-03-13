import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import Register from './Register/Register'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
