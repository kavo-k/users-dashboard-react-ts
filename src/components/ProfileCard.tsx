import type { User } from '../types'
import { Link } from 'react-router-dom';

export type ProfileCardProps = {
    user: User
    onFollowClick: () => void
    onDeleteUserClick: () => void
};

export function ProfileCard({ user, onFollowClick, onDeleteUserClick }: ProfileCardProps) {
    return (
        <section className='profileCard'>
            <img src={user.profileImage} className="profileImg" alt="user avatar" />
            <h1>{user.name}</h1>
            <p>{user.description}</p>
            <button onClick={onFollowClick} className={user.isFollowed ? 'followButton following' : 'followButton'}>
                {user.isFollowed ? 'Вы подписаны' : 'Подписаться'}
            </button>
            <p>подписчиков: {user.followersCount}</p>
            <Link to={`/users/${user.id}`}>Открыть профиль</Link>
            <button onClick={onDeleteUserClick} className='deleteUserButton'>Удалить</button>
        </section>
    )
}