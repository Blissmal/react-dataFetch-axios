import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="container">
      <h1 className="my-4 text-center">User List</h1>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Phone:</strong> {user.phone}<br />
                  <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a><br />
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
