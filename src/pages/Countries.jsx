import React from "react";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

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
    <div>
      <h2>Countries</h2>
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
            <img
              src={country.flags.png}
              alt={country.name.common + " flag"}
              style={{ width: "100%" }}
            />
            <p>{country.name.official}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
