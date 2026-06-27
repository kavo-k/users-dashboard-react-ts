import type { ApiUser } from '../types'

export async function fetchApiUsers(): Promise<ApiUser[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error();
    const apiUsers: ApiUser[] = await response.json();
    return apiUsers
}