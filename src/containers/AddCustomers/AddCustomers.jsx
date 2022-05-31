import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageHeader from "../../components/PageHeader/PageHeader";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from '@mui/icons-material/Save';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../redux/slices/customers";
import { useNavigate } from "react-router-dom";
import { handleFirebaseUpload } from "../../firebase/upload.firebase";
import { toast } from "react-toastify";

const AddCustomers = () => {
  const defaultAvater =
    "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageTitle = "Add Customers";
  const pageHeaderConfig = [];
  const [gender, setGender] = useState("");
  const [picture, setPicture] = useState(defaultAvater);
  const [file, setFile] = useState(defaultAvater);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const { fullname, username, email, gender, address, phone } = event.target;
    const payload = {
      fullname: fullname.value,
      username: username.value,
      email: email.value,
      gender: gender.value,
      address: address.value,
      phone_number: phone.value,
    };
    if (!file) {
      payload.picture = picture;
      setIsLoading(false);
    } else {
      try {
        const url = await handleFirebaseUpload(file);
        payload.picture = url;
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        toast.error(e);
        setIsLoading(false);
      }
    }
    dispatch(
      addCustomer({
        data: payload,
      })
    );
    fullname.value = "";
    username.value = "";
    email.value = "";
    setGender("");
    address.value = "";
    phone.value = "";
    setIsLoading(false);
    setTimeout(() => navigate("/customer?page=0&rowsPerPage=5&search="), 750);
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 8 }}>
      <PageHeader title={pageTitle} config={pageHeaderConfig} />
      <Box
        component="div"
        variant="div"
        sx={{ width: { sx: "100%", sm: "100%", md: 600 } }}
      >
        <ImageUpload
          picture={picture}
          setPicture={setPicture}
          setFile={setFile}
        />
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
              label="fullname"
              name="fullname"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="username"
              name="username"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="email"
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
              label="address"
              name="address"
              type="text"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="phone"
              name="phone"
              type="text"
              required
            />
          </FormControl>
        </Stack>
        <LoadingButton
          type="submit"
          sx={{ mt: 2 }}
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Submit
        </LoadingButton>
      </form>
    </Container>
  );
};

export default AddCustomers;
