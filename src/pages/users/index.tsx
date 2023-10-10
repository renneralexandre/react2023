// Using Typescript, create a Component to fetch http://localhost:3333/users and show cards for each user, which users object contain {id, name, gender}fields.

import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  gender: string;
}
// Generate a formatted card
const UserCard: React.FC<User> = ({ id, name, gender }) => (
  <Grid>
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}
        title={
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        }></CardHeader>
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

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.12:3333/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Grid container>
      <Grid xs={12} md={12}>
        <div style={{ background: "red" }}>cabec</div>
      </Grid>
      <Grid xs={12} md={12}>
        <Card>teste</Card>
      </Grid>
      {users.map((user) => (
        <Grid xs={12} md={12}>
          <UserCard key={user.id} {...user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
