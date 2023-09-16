
import { Card, CardHeader, Avatar, CardContent, Typography } from '@mui/material';

export default function StudentCard(props: { name: any; semester: any; }) {
  const { name, semester } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976D2' }} aria-label="student">
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={name}
        subheader={`Semester: ${semester}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Additional information about the student can be added here.
        </Typography>
      </CardContent>
    </Card>
  );
}
