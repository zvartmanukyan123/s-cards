import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ClearIcon from "@mui/icons-material/Clear";
import { useCardStyles } from "./cardStyles";
import { useCardContext } from "../../context/cardContext";

const Cards = () => {
  const classes = useCardStyles();
  const { cards, handleRemove } = useCardContext();
  return (
    <div className={classes.cardContainer}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cards.map((item) => {
          return (
            <Grid item xs={6} key={item.id}>
              <Card className={classes.card}>
                <ClearIcon onClick={() => handleRemove(item.id)} />
                <CardContent>{item.number}</CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
