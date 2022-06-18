import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useGetProductsQuery } from "../../../features/api/apiSlice";

function Main() {
  const { data, isFetching, error } = useGetProductsQuery(12);

  if (isFetching) return <div>Loading...</div>;
  console.log(data);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ gridAutoRows: "1fr" }}>
          {data?.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card
                sx={{
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  alt={product.title}
                  height="140"
                  image={product.image}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Main;
