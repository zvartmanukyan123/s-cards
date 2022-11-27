import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { INSTRUCTIONS } from "../../constants/constants";
import { Fragment } from "react";
import { useInstructionStyles } from "./instructionStyles";

const Instructions = () => {
  const classes = useInstructionStyles();

  return (
    <Box>
      <Drawer
      className={classes.drawer}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        {Object.keys(INSTRUCTIONS).map((_, i) => (
          <Fragment key={i}>
            <ListItem alignItems="flex-start">
              <ListItemText primary={INSTRUCTIONS[i]} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </Drawer>
    </Box>
  );
};

export default Instructions;
