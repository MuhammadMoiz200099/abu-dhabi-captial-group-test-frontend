import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageHeader from "../../components/PageHeader/PageHeader";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ImageUpload from "../../components/ImageUpload/ImageUpload";

const AddCustomers = () => {
  const pageTitle = "Add Customers";
  const pageHeaderConfig = [];
  const [gender, setGender] = useState("");
  const [picture, setPicture] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { fullname, username, email, gender, address, phone } = event.target;
    const payload = {
      fullname: fullname.value,
      username: username.value,
      email: email.value,
      gender: gender.value,
      address: address.value,
      phone_number: phone.value,
      picture,
    };

    console.log(payload);
    fullname.value = "";
    username.value = "";
    email.value = "";
    setGender("");
    address.value = "";
    phone.value = "";
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <PageHeader title={pageTitle} config={pageHeaderConfig} />
      <Box
        component="div"
        variant="div"
        sx={{ width: { sx: "100%", sm: "100%", md: 600 } }}
      >
        <ImageUpload setPicture={setPicture} />
      </Box>
      <form onSubmit={handleOnSubmit}>
        <Stack
          spacing={4}
          direction="column"
          sx={{ width: { sx: "100%", sm: "100%", md: 600 }, marginTop: 5 }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Full Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="fullname"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="username"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="email"
              type="email"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Gender</InputLabel>
            <Select
              label="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={""}>Gender</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Address</InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="address"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="phone"
              type="text"
              required
            />
          </FormControl>
        </Stack>
        <Button type="submit" variant="contained" sx={{ marginTop: 5 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddCustomers;
