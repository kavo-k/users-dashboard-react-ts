import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { v4 as uuidv4 } from "uuid"
import type { User } from '../types'
import { UserList } from '../components/UserList'
import { mapApiUsersToUsers } from '../mappers/userMappers'
import { useNavigate } from 'react-router-dom'
import { fetchApiUsers } from "../api/usersApi";
import { AddUserForm } from '../components/AddUserForm'
import { saveUsers, getSavedUsers } from '../storage/usersStorage'


function UsersPage() {
  const [users, setUsers] = useState<User[]>(getSavedUsers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();


  useEffect(() => {
    saveUsers(users);
  }, [users])


  useEffect(() => {
    async function loadUsers() {
      try {
        const parsedUsers = getSavedUsers()
        if (parsedUsers.length > 0) return
        setIsLoading(true);
        setError(null);
        const apiUsers = await fetchApiUsers();
        const mappedUsers = mapApiUsersToUsers(apiUsers);
        setUsers(mappedUsers);
        return
      } catch {
        setError('Не удалось загрузить пользователей')
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, [])



  function handleFollowClick(id: string) {
    setUsers((currentUsers) => currentUsers.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isFollowed: !user.isFollowed,
          followersCount: user.isFollowed ? user.followersCount - 1 : user.followersCount + 1,
        }
      }

      return user
    })
    )
  }


  function handleAddUser(name: string, description: string) {
    const newUser: User = {
      name: name.trim(),
      description: description.trim(),
      profileImage: reactLogo,
      id: uuidv4(),
      isFollowed: false,
      followersCount: 0,
    }
    setUsers((currentUsers) => [...currentUsers, newUser]);
    navigate(`/users/${newUser.id}`);
  }


  function handleDeleteUser(id: string) {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
  }

  function handleClearUsers() {
    setUsers([])
  }

  return (
    <main className="pageShell">
      <AddUserForm onAddUser={handleAddUser} />
      <section id='usersParameters'>
        <p>Пользователей: {users.length}</p>
        <button onClick={handleClearUsers} className='deleteAllUsers' type='button' disabled={users.length === 0}>Удалить всех</button>
      </section>
      {isLoading ? (
        <p className="statusText">Загрузка...</p>
      ) : error !== null ? (
        <p className="errorText">{error}</p>
      ) : (
        <section id='usersList'>
          {users.length > 0 ? (
            <UserList users={users} onFollowClick={handleFollowClick} onDeleteUserClick={handleDeleteUser} />
          ) : (
            <p className='emptyUsers'>Пользователей нет</p>
          )}
        </section>
      )}
    </main>
  )
}


export default UsersPage
