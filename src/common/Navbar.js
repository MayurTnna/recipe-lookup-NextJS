import React from "react";
import styles from "../styles/Navbar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar className="navbar-main" bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand
            className={styles.rainbow_text}
            onClick={handleClick}
            href="#"
          >
            Foodieee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
         
              <div className={styles.search_box}>
                <button className={styles.btn_search}>
                  <FaSearch />
                </button>
                <input
                  type="text"
                  className={styles.input_search}
                  placeholder="Type to Search..."
                />
              </div>
       
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
