import React, { useState } from "react";

import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
// import CommonHero from "../Common/CommonHero.tsx";

// import Briyani from "../Images/briyani.jpg";
 import Categories from "./Categories";
import CommonHero from "../Common/CommonHero";
const Meal = () => {
 
  return (
    <>
   
   
      <CommonHero />
      <Container sx={{ mt: "1rem", mb: "2rem" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.5rem",
             
            },
             textAlign: "center",
              fontWeight: 600,
              mb:'1rem'
          }}
        >
          FEATURED FOODS
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} sx={{ pt: 20 }}>
         
             <MealType src={"/Images/briyani.jpg"} FoodName={"Roasted Chicken Biriyani"} price={845.00 }/>
            
          </Grid>
           <Grid item xs={6} sm={3} sx={{ pt: 20 }}>
         
             <MealType src={"/Images/briyani.jpg"} FoodName={"Roasted Chicken Biriyani"} price={845.00 }/>
            
          </Grid>
           <Grid item xs={6} sm={3} sx={{ pt: 20 }}>
         
             <MealType src={"/Images/briyani.jpg"} FoodName={"Roasted Chicken Biriyani"} price={845.00 }/>
            
          </Grid>
           <Grid item xs={6} sm={3} sx={{ pt: 20 }}>
         
             <MealType src={"/Images/briyani.jpg"} FoodName={"Roasted Chicken Biriyani"} price={845.00 }/>
            
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
};

export default Meal;




export const MealType:React.FC<{src:string;FoodName:string;price:number }> = ({src,FoodName,price}) => {
  return (
   <>
    <CardMedia
                component="img"
                src={src}
                alt="header"
                height="215"
                width="345"
              />
              <CardContent
                sx={{
                  py: "0.5rem",
                  pb: "7px !important",
                  boxShadow: 5,
                  borderRadius: "0% 0% 10px 10px",
                }}
              >
                <Typography
                  className="text"
                  sx={{
                    fontSize: { md: "1.2rem", xs: "0.6rem", sm: "0.7rem" },
                    // pb: { xs: 0.5, sm: 1, md: 1.5 },
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#235b34",
                  }}
                >
                  {/* Roasted Chicken Biriyani */}
                  {FoodName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
                    fontWeight: 700,
                    textAlign: "center",
                    color: "#d5790f",
                  }}
                >
                  {/* Rs. 845.00 */}
                 Rs.{" "}{ price}
                </Typography>
              </CardContent>
   </>
  )
}

