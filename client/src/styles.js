// import { makeStyles } from "@mui/styles"; // ✅ Correct import
// import { styled } from "@mui/system";

// export default styled(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 0",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     color: "rgba(0,183,255, 1)",
//   },
//   image: {
//     marginLeft: "15px",
//   },
// }));

import { styled } from "@mui/system";

const useStyles = styled(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  gridContainer: {
    // ✅ Corrected Syntax
    display: "flex",
    justifyContent: "space-between", // Ensures space between Posts and Form
    alignItems: "flex-start", // Aligns items to the top
    flexWrap: "wrap", // Prevents items from breaking layout on smaller screens
    gap: "20px", // Adds spacing
  },
}));

export default useStyles;
