import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import HomePage from './HomePage';
const Initialize = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { sendRequest: fetchUsers } = useHttp();

  // This useEffect serves as the initialization wherein we get the data from the API.
  // It has a dependency on totalPages as to call the hook for each existing page in the API.
  useEffect(() => {
    const transformData = (usersData) => {
      const loadedUsers = [];
      let data = usersData.data;
      for (const user in data) {
        loadedUsers.push({
          id: data[user].id,
          email: data[user].email,
          first_name: data[user].first_name,
          last_name: data[user].last_name,
          avatar: data[user].avatar,
        });
      }
      setUsers((u) => [...u, ...loadedUsers]);
      if (totalPages < usersData.total_pages) {
        setTotalPages(totalPages + 1);
      }
    };

    fetchUsers(
      { url: 'https://reqres.in/api/users?page=' + totalPages },
      transformData
    );
  }, [fetchUsers, totalPages]);

  return (
    <React.Fragment>
      {/* Set pageSize to limit the number of data per page */}
      <HomePage users={users} pageSize={6} />
    </React.Fragment>
  );
};
export default Initialize;
