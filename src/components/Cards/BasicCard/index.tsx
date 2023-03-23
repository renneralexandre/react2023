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
    <Card>
      <CardContent >
        <CardHeader title={props.title} />
        <h1>{props.details}</h1>
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
