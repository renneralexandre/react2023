// Using Typescript, create a Component to fetch http://localhost:3333/users and show cards for each user, which users object contain {id, name, gender}fields.

import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  gender: string;
}
// Generate a formatted card
const UserCard: React.FC<User> = ({ id, name, gender }) => (
  <Grid xs={4}>
    <Card variant="outlined">
      <CardHeader avatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}>teste</CardHeader>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h6">ID: {id}</Typography>
        <Typography variant="h6">Gender: {gender}</Typography>
      </CardContent>
    </Card>
  </Grid>
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
    <Grid container>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </Grid>
  );
};

export default UserList;
