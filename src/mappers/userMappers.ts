import reactLogo from '../assets/react.svg'
import type { ApiUser, User } from "../types";

export function mapApiUsersToUsers(apiUsers: ApiUser[]) {
    const mappedUsers: User[] = apiUsers.map((apiUser) => mapApiUserToUser(apiUser));
    return mappedUsers
}

function mapApiUserToUser(apiUser: ApiUser): User {
    return {
        id: String(apiUser.id),
        name: apiUser.name,
        description: apiUser.email,
        profileImage: reactLogo,
        isFollowed: false,
        followersCount: 0,
    }
}