import './Main.css'
import Header from './Header'

export default function Main(props) {
    return (
        <>
            <Header {...props} />
            <main className="content">
                Conteúdo
            </main>
        </>
    )
}