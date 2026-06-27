import { Link } from "react-router-dom";
import type { User } from "../types";

type FollowedUsersPreviewProps = {
    users: User[]
}

export function FollowedUsersPreview({ users }: FollowedUsersPreviewProps) {
    return (
        <div className="previewGrid">
            {users.map((user) => (
                <section key={user.id} className='previewUserCard' >
                    <img src={user.profileImage} className="profileImg" alt="user avatar" />
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.description || 'Описание не указано'}</p>
                        <span>Подписчиков: {user.followersCount}</span>
                    </div>
                    <Link to={`/users/${user.id}`}>Открыть профиль</Link>
                </section >
            ))}
        </div>
    )
}
