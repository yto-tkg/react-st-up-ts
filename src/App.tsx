import axios from "axios";
import React, { useState } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
