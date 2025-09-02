import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import { StarRating } from "./StarRating";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/*<StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />*/}
  </StrictMode>
);
