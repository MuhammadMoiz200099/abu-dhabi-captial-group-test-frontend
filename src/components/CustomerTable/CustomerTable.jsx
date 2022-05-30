import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const CustomerTable = () => {
  const navigate = useNavigate();
  const routeTo = (id) => navigate(`/view-customer/${id}`);
  const [rows, setRows] = useState([]);

  return (
    <Box component="div" variant="div">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ background: "#1a76d2" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                FullName
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                UserName
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Picture
              </TableCell>
              <TableCell
                sx={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                  width: 150,
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row?.fullname}</TableCell>
                <TableCell>{row?.username}</TableCell>
                <TableCell>{row?.email}</TableCell>
                <TableCell>{"N/A"}</TableCell>
                <TableCell
                  onClick={() => routeTo(row._id)}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                  }}
                >
                  View Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerTable;
