import React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 4,
            pl: 5,
            pr: 5,
          }}
        >
          <Paper elevation={6} sx={{ width: "800px", p: 3 }}>
            <div key={post.id}>
              <Paper variant="outlined">
                <Link to={"/GetSingleProduct/" + post.id}>
                  <img
                    src={post.image}
                    alt=" "
                    className="responsive"
                    width="100%"
                    height="400"
                  />
                </Link>
              </Paper>
              <p>
                <span
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  Price:
                </span>
                {post.price}
              </p>

              <p>
                <span
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  Title:
                </span>
                {post.title}
              </p>
              <p>
                <span
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  Category:
                </span>
                {post.category}
              </p>
              <p>
                <span
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  Description:
                </span>
                {post.description}
              </p>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
