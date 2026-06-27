import { Link } from "react-router-dom"

export function NotFoundPage() {
    return (
        <main className="pageShell notFoundPage">
            <h1>404</h1>
            <p>Страница не найдена.</p>
            <Link to='/' className="primaryLink">Вернуться на главную страницу</Link>
        </main>
    )
}
