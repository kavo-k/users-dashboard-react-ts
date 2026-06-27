import { useState } from "react";

type UserFormProps = {
    onAddUser: (name: string, description: string) => void
}

export function AddUserForm({onAddUser}: UserFormProps) {
    const [newUserName, setNewUserName] = useState('');
    const [newUserDescription, setNewUserDescription] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (newUserName.trim() === '') return

        onAddUser(newUserName.trim(), newUserDescription.trim())

        setNewUserName('')
        setNewUserDescription('')
    }
    return (
        <form id='newUser' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={newUserName} onChange={e => setNewUserName(e.target.value)} className="newUserInput" placeholder="Имя пользователя" />
            <input type="text" value={newUserDescription} onChange={e => setNewUserDescription(e.target.value)} className='newUserInput' placeholder='Описание' />
            <button type="submit">Добавить пользователя</button>
        </form>
    )
}
