import React, { useEffect, useState } from 'react'
import TopNavbar from '../Shared/TopNavbar';
import { FetchUsers } from '../config/api';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios
            .get(
                "https://jsonplaceholder.typicode.com/users",
                {
                    headers: {
                        "authorization": "id token"
                    }
                }
            )
            .then((response) => {
                console.log(response)
                setUsers(response?.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    console.log(users)

    return (
        <div>
            <TopNavbar />
            Users
            {users.map((user) => {
                return (
                    <div>
                        {`${user.name} ${user.email} ${user.website}`}
                    </div>
                )
            })}
        </div>
    )
}

export default Users


