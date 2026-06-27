import type { User } from '../types'
import { ProfileCard } from './ProfileCard'

export type UserListProps = {
    users: User[]
    onFollowClick: (id: string) => void
    onDeleteUserClick: (id: string) => void
}

export function UserList({ users, onFollowClick, onDeleteUserClick }: UserListProps) {
    return (
        <>
            {
                users.map((item) => (
                    <ProfileCard user={item} key={item.id} onFollowClick={() => onFollowClick(item.id)} onDeleteUserClick={() => onDeleteUserClick(item.id)} />
                ))
            }
        </>
    )
}
