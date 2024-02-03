import React from "react";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Countries = () => {
  const countryApi = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    const response = await fetch(countryApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ["countryList"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <div>Loading...</div>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        sx={{ flexGrow: 1 }}
        color={"black"}
        align="center"
      >
        Countries
      </Typography>
      <Grid container spacing={2}>
        {countryData.map((country) => (
          <Grid
            item
            key={country.cca2}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            sx={{
              display: "flex",
              flexDirection: "column",  
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
          >
            <Link to={`${country.cca2}`}>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                style={{ width: "100%" }}
              />
            </Link>
            <Typography variant="h6" component="h6">
              {country.name.official}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
