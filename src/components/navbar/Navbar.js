import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavbarStyles } from "./navbarStyles";
import { useCardContext } from "../../context/cardContext";

const Navbar = () => {
  const classes = useNavbarStyles();
  const { cards, handleAdd, handleSort } = useCardContext();

  return (
      <AppBar position="static">
        <Toolbar className={classes.navWrapper}>
          <Button color="inherit" variant="outlined" onClick={handleAdd}>
            Add Card
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => handleSort(cards)}
          >
            Sort Cards
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
