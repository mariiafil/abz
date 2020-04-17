import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [number, setNumber] = useState(6);

  const handleClick = () => {
    setNumber(number + 6);
  };

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers([...data.users]);
        } else {
          // proccess server errors
        }
      });
  }, []);

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${number}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers([...data.users]);
        }
      });
  }, [number]);

  return (
    <section className="users">
      <h2 className="users__header">Our cheerful users</h2>
      <p className="users__description">
        Attention! Sorting users by registration date
      </p>
      <ul className="users__list">
        {users.map(user => (
          <li className="user" key={user.id}>
            <img className="user__img" src={user.photo} alt="user" />
            <p className="user__name">{user.name}</p>
            <p className="user__info">{user.position}</p>
            <p className="user__info">{user.email}</p>
            <p className="user__info">{user.phone}</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="users__more"
        onClick={handleClick}
      >
       Show more
      </button>
    </section>
  );
};
