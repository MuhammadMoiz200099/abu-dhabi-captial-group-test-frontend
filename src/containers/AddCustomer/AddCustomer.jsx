import React, { useState } from "react";
import classes from "./add-customer.module.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "./../../redux/slices/customers";
import { handleFirebaseUpload } from "../../firebase/upload.firebase";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { FaSave } from "react-icons/fa";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultAvater =
    "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
  const pageTitle = "Add Customer";
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
    setPicture("");
    setFile("");
    setIsLoading(false);
    setTimeout(() => navigate("/customer?page=0&rowsPerPage=5&search="), 750);
  };

  return (
    <div className={classes.page}>
      <PageHeader
        title={pageTitle}
        navigate="/customer?page=0&rowsPerPage=5&search="
      />
      <div className={classes.form_container}>
        <ImageUpload
          picture={picture}
          setPicture={setPicture}
          setFile={setFile}
        />
        <form onSubmit={handleOnSubmit}>
          <div className={classes.form_container__form_fields}>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Fullname <span>*</span>
              </label>
              <input
                className={
                  classes.form_container__form_fields__form_group__input
                }
                label="fullname"
                name="fullname"
                placeholder="Fullname *"
                type="text"
                required
              />
            </div>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Username <span>*</span>
              </label>
              <input
                className={
                  classes.form_container__form_fields__form_group__input
                }
                label="username"
                name="username"
                placeholder="Username *"
                type="text"
                required
              />
            </div>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Email <span>*</span>
              </label>
              <input
                className={
                  classes.form_container__form_fields__form_group__input
                }
                label="email"
                name="email"
                placeholder="Email *"
                type="email"
                required
              />
            </div>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Gender <span>*</span>
              </label>
              <select
                className={
                  classes.form_container__form_fields__form_group__select
                }
                label="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={""}>Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Address <span>*</span>
              </label>
              <input
                className={
                  classes.form_container__form_fields__form_group__input
                }
                label="address"
                name="address"
                placeholder="Address *"
                type="text"
                required
              />
            </div>
            <div className={classes.form_container__form_fields__form_group}>
              <label
                className={
                  classes.form_container__form_fields__form_group__label
                }
              >
                Phone Number <span>*</span>
              </label>
              <input
                className={
                  classes.form_container__form_fields__form_group__input
                }
                label="phone"
                name="phone"
                placeholder="Phone *"
                type="text"
                required
              />
            </div>
          </div>
          <div className={classes.form_container__form_actions}>
            <Button type="submit">
              {isLoading ? <Loader /> : <FaSave />}
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
