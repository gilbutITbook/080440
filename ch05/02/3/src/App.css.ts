import { style } from "@vanilla-extract/css";
export const container = style({
  padding: "1rem",
});
// export const button = style({
//   background: "transparent",
//   borderRadius: "3px",
//   border: "2px solid #bf4f74",
//   color: "#bf4f74",
//   margin: "0 1em",
//   padding: "0.25em 1em",
// });
export const button = style({
  background: "transparent",
  borderRadius: "3px",
  border: "2px solid #bf4f74",
  color: "#bf4f74",
  margin: "0 1em",
  padding: "0.25em 1em",
  ":hover": {
    backgroundColor: "#bf4f74",
    color: "white",
  },
});
export const active = style({
  backgroundColor: "blue",
  border: "2px solid blue",
  color: "white",
});
