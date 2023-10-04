// Using Typescript, create a Component to fetch http://localhost:3333/users and show cards for each user, which users object contain {id, name, gender}fields.

import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  gender: string;
}
// Generate a formatted card
const UserCard: React.FC<User> = ({ id, name, gender }) => (
  <Card sx={{ margin: "10px", width: "200px" }} variant="outlined">
    <CardHeader avatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}>teste</CardHeader>
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="h6">ID: {id}</Typography>
      <Typography variant="h6">Gender: {gender}</Typography>
    </CardContent>
  </Card>
);

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
