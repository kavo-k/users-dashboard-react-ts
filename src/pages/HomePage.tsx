import { Link } from 'react-router-dom'
import { getSavedUsers } from '../storage/usersStorage'
import { FollowedUsersPreview } from '../components/FollowedUsersPreview';

function HomePage() {
    const users = getSavedUsers();
    const totalUsers = users.length;
    const followedUsers = users.filter((user) => {
        return user.isFollowed === true
    })
    const totalFollowersCount = users.reduce((sum, user) => {
        return sum + user.followersCount
    }, 0)
    return (
        <main className="pageShell homePage">
            <section className="homeIntro">
                <p className="eyebrow">React + TypeScript</p>
                <h1>Учебная социальная сеть</h1>
                <p className="pageLead">Практика компонентов, props, state, форм, API и маршрутов перед большим проектом.</p>
                <Link to="/users" className="primaryLink">К пользователям</Link>
            </section>

            <section className="statsGrid" aria-label="Статистика пользователей">
                <article>
                    <span>{totalUsers}</span>
                    <p>Пользователей</p>
                </article>
                <article>
                    <span>{followedUsers.length}</span>
                    <p>Подписок</p>
                </article>
                <article>
                    <span>{totalFollowersCount}</span>
                    <p>Подписчиков по профилям</p>
                </article>
            </section>

            <section className="followedPreview">
                <div className="sectionHeader">
                    <h2>Подписанные пользователи</h2>
                    <Link to="/users" className="secondaryLink">Все пользователи</Link>
                </div>
                {followedUsers.length > 0 ? (
                    <FollowedUsersPreview users={followedUsers} />
                ) : (
                    <p className="emptyUsers">Вы пока ни на кого не подписаны</p>
                )}
            </section>
        </main>
    )
}

export default HomePage
