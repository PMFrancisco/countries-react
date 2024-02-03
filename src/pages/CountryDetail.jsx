import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const CountryDetail = () => {
  const countryApi = "https://restcountries.com/v3.1/alpha";
  const { cca2 } = useParams();

  const fetchData = async () => {
    const response = await fetch(`${countryApi}/${cca2}`);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: countryData, isLoading } = useQuery({
    queryKey: ["countryDetail", cca2],
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Detail</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Name
              </TableCell>
              <TableCell>{countryData[0].name.common}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Capital
              </TableCell>
              <TableCell>{countryData[0].capital}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Population
              </TableCell>
              <TableCell>{countryData[0].population}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Area
              </TableCell>
              <TableCell>{countryData[0].area} square kilometers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Region
              </TableCell>
              <TableCell>{countryData[0].region}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Subregion
              </TableCell>
              <TableCell>{countryData[0].subregion}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Continent
              </TableCell>
              <TableCell>{countryData[0].continents[0]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Languages
              </TableCell>
              <TableCell>
                {Object.values(countryData[0].languages).join(", ")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Currency
              </TableCell>
              <TableCell>
                {Object.keys(countryData[0].currencies).join(", ")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Driving Side
              </TableCell>
              <TableCell>{countryData[0].car.side}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Flag
              </TableCell>
              <TableCell>
                <img
                  src={countryData[0].flags.png}
                  alt={`${countryData[0].name.common} flag`}
                  style={{ width: "50px", height: "auto" }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Coat of Arms
              </TableCell>
              <TableCell>
                {Object.keys(countryData[0].coatOfArms).length > 0 ? (
                  <img
                    src={countryData[0].coatOfArms.png}
                    alt={`${countryData[0].name.common} coat of arms`}
                    style={{ width: "50px", height: "auto" }}
                  />
                ) : (
                  "None"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Google Maps
              </TableCell>
              <TableCell>
                <Link
                  href={countryData[0].maps.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                OpenStreetMap
              </TableCell>
              <TableCell>
                <Link
                  href={countryData[0].maps.openStreetMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on OpenStreetMap
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
