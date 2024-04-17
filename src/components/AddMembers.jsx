import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import axios from "axios";

const AddMembers = ({ setShowAddMembers, fetchMembers }) => {
  const [formData, setFormData] = useState({
    hof: "",
    phone1: "",
    phone2: "",
    email: "",
    mother_parish: "",
    address: "",
  });
  const onSubmitHanlder = (e) => {
    e.preventDefault();
    console.log({ id: Math.random(), ...formData }, "submit");
    axios.post("http://localhost:8000/family", formData);
    setShowAddMembers(false);
    fetchMembers();
  };
  const onChangeHandler = (e, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmitHanlder} className="add-members">
      <h3>Basic Details</h3>
      <InputField
        placeholder="Name"
        label="Name"
        value={formData.hof}
        onChange={(e) => onChangeHandler(e, "hof")}
      />
      <InputField
        placeholder="Phone 1"
        label="Phone 1"
        value={formData.phone1}
        onChange={(e) => onChangeHandler(e, "phone1")}
      />
      <InputField
        placeholder="Phone 2"
        label="Phone 2"
        value={formData.phone2}
        onChange={(e) => onChangeHandler(e, "phone2")}
      />
      <InputField
        placeholder="Email"
        label="Email"
        value={formData.email}
        onChange={(e) => onChangeHandler(e, "email")}
      />
      <InputField
        placeholder="Mother Parish"
        label="Mother Parish"
        value={formData.mother_parish}
        onChange={(e) => onChangeHandler(e, "mother_parish")}
      />
      <InputField
        placeholder="Address"
        label="Address"
        value={formData.address}
        onChange={(e) => onChangeHandler(e, "address")}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddMembers;