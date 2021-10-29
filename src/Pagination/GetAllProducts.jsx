import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import Header1 from "../header/Header1";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Categoryheader2 from "../category/categoryheader2";

const GetAllProducts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setPosts(res.data);
      console.log(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //use for get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // used for page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header1 />
      <Categoryheader2 name="PRODUCT" />
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 4,
            pl: 5,
            pr: 5,
          }}
        >
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </Grid>
      </Container>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default GetAllProducts;
