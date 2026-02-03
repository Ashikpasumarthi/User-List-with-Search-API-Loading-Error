import React, { useState, useEffect } from "react";
const List = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        setUsersData((prev) => [...prev, data]);
      }
      catch (e) {
        console.log(e.message);
      }

    }
    fetchData();
  }, [])
  return (
    <>
      <div className="user-list">
        {usersData.map((user, index) => (
          <div key={index} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>

  )
}

export default List;