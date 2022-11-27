import { makeStyles } from '@mui/styles';
import { DRAWER_WIDTH } from "../../constants/constants";


export const useInstructionStyles = makeStyles({
  drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: DRAWER_WIDTH,
        boxSizing: "border-box",
      },
  }
  });