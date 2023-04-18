import React from "react";
import styles from "../styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SearchBar from "@/components/SearchBar";

const Header = (showSearchBar) => {
  const items = useSelector((state) => state.nextReducer.posts.data);
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

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {items && showSearchBar ? <SearchBar /> : <></>}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
