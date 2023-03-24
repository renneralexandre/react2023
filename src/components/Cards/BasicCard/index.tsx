import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  details: string;
}

const BasicCard = (props: Props) => {
  return (
    <Card sx={{bgcolor: 'blue', maxWidth: 300, maxHeight: 300}}>
      <CardContent >
        <CardHeader title={props.title} />
        <h3>{props.details}</h3>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
