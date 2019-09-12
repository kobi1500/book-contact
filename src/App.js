import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Box direction="row" justify="center" alignItems="center">
      <Navbar />
      <Contact />
    </Box>
  );
}

export default App;
