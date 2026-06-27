import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import type { User } from '../types'
import { findSavedUserById } from '../storage/usersStorage';

export function UserProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { userId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        if (!userId) return

        async function loadUser() {
            setUser(null);
            if (userId) {
                const findedUser = findSavedUserById(userId)
                setUser(findedUser);
            }
            setIsLoading(false);
        }
        loadUser();
    }, [userId])

    if (!userId) {
        return <p className="statusText">ID пользователя не найден</p>
    }


    return (
        <>
            {isLoading ? (<p className="statusText">Загрузка профиля...</p>) :
                !user ? (
                    <main className="pageShell">
                        <p className="statusText">Пользователь не найден</p>
                        <Link to="/users" className="secondaryLink">К списку пользователей</Link>
                    </main>
                ) : (
                    <main className="pageShell profilePage">
                        <Link to="/users" className="secondaryLink">К списку пользователей</Link>
                        <section className="profileDetails">
                            <img src={user.profileImage} alt="Аватар пользователя" />
                            <div>
                                <p className="eyebrow">ID пользователя: {userId}</p>
                                <h1>{user.name}</h1>
                                <p>{user.description || 'Описание не указано'}</p>
                                <p className="profileFollowers">Подписчиков: {user.followersCount}</p>
                            </div>
                        </section>
                    </main >
                )}
        </>
    )

}
