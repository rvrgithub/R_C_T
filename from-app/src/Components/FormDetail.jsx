import React, { useState } from "react";
//  import  CheckIcon from "checkIcon"
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  NumberInput,
  Button,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
export const FormDetail = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let { type, name, value, radio } = e.target;
    // console.log(type ,name ,radio);
    if (type === "radio") {

      setForm({
        ...form,
        [name]: value,
      });
      console.log("name",name)
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  const handleOnSubmit = (e) => {
    // console.log("e", e);
    e.preventDefault();
    fetch("http://localhost:8080/formData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    // setForm(form)
    console.log("form",form)
  };
  return (
    <FormControl
      width="450px"
      margin="50px auto"
      padding="20px"
      border="1px solid #cecece"
      // onChange={handleOnSubmit}
    >
      {/*........ first-name...... */}
      <FormLabel htmlFor="first-name">First name</FormLabel>
      <Input
        placeholder="First name"
        name="firstName"
         onChange={handleChange}
      />
      <br />

      {/*......... Age............ */}
      <FormLabel htmlFor="amount">Age</FormLabel>
      <NumberInput>
        <NumberInputField name="age" type="number" onChange={handleChange} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <br />
      {/* ....Address ..........*/}
      <FormLabel htmlFor="address">Address</FormLabel>
      <Input
        placeholder="Enter your Address"
        name="address"
        onChange={handleChange}
      />
      <br />
      {/* ..........Department ...............*/}
      <FormLabel htmlFor="department">Department</FormLabel>
      <Select
        name="department"
        placeholder="Select department"
        onClick={handleChange}
      >
        <option>Commerce</option>
        <option>Arts</option>
        <option>Music</option>
        <option>science</option>
      </Select>
      <br />

      {/* .......salary..... */}
      <FormLabel htmlFor="salary">Salary</FormLabel>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray"
            fontSize="1.2em"
            children="$"
          />
          <Input
            placeholder="Enter Salary"
            name="salary"
            onChange={handleChange}
          />
        </InputGroup>
      </Stack>

      <br />
      {/* .................marital state............ */}
      <FormLabel as="legend">marital state</FormLabel>
      <RadioGroup>
        <Stack direction="row">
          <Radio type="radio" onChange={handleChange} name="marital"
          value="married"
           >
            Marital
          </Radio>
          <Radio type="radio" onChange={handleChange} name="marital" 
          value="unmarried"
          >
            Unmarital
          </Radio>
        </Stack>
      </RadioGroup>

      {/* ..... button.... */}
      <Button
        mt={4}
        colorScheme="teal"
        type="submit"
        margin="15px 155px"
        onClick={(e) => {handleOnSubmit(e)}}
      >
        Submit
      </Button>
    </FormControl>
  );
};
