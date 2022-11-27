import { makeStyles } from "@mui/styles";

export const useCardStyles = makeStyles({
  cardContainer: {
    width: "100%",
    overflowX: "auto",
    height: "calc(100vh - 124px)",
    "& .MuiGrid-container": {
      maxWidth: "650px",
      margin: "0 auto",
      "& > div:last-child": {
        paddingBottom: "8px"
      },
    },
  },
  card: {
    border: "solid 1px",
    position: "relative",
    minHeight: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      position: "absolute",
      right: "10px",
      top: "10px",
      cursor: "pointer",
    },
  },
});
