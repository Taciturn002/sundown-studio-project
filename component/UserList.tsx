import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<{ id: number; name: string; email: string }[]>([]);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Show all users initially
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Debounce Function
  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeout); // Cleanup to prevent excessive calls
  }, [search, users]);

  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-4xl font-bold text-center mb-6">User List</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-4 border rounded-lg"
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} className="border p-4 mb-2 rounded-lg shadow-md">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
