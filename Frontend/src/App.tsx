import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {NavBar} from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/router";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Container fluid>
          <Router/>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
