import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

export default function App() {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main icon="home" title="Início" subtitle="Projeto CRUD de React" />
            <Footer />
        </div>
    )
}