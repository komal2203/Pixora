// import { makeStyles } from "@mui/styles"; // ✅ Correct import

import { styled } from "@mui/system";

export default styled((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));
