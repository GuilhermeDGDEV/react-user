import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import MainRoute from './Routes'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <MainRoute />
                <Footer />
            </div>
        </BrowserRouter>
    )
}