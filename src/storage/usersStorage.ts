import type { User } from "../types";

export function getSavedUsers(): User[] {
    try {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            const parsedUsers = JSON.parse(savedUsers);
            return parsedUsers
        }
        return []
    }
    catch {
        return []
    }
}

export function saveUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
}

export function findSavedUserById(id: string): User | null {
    const savedUsers = getSavedUsers()
    return savedUsers.find((user) => user.id === id) ?? null
}