import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./From.module.css";
export const Form = () => {
  const ref = useRef();
  const passref = useRef();
  const [form, setForm] = useState({
    // username: "",
    //  email: "",
    //  password:"",
    //  number:"",
    //  age:0,
    //  isIndian:false,
  });

  // maoChange input with unique identifier
  // onChnage in geeting inique identifier and the value
  // updating from where  key = unique identifier and value = new value
  const onChange = (e) => {
    // if(e.keyCode=== 13){
    //   console.log("Press Enter Key");
    // }
    // if(e.keyCode === 32){
    //   console.log("Enter soace");
    // }

    let { type, name, value, checked, files } = e.target;
    // console.log(type, name, value, checked, files);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  // useEffect(()=>{
  // console.log(form)
  // },[form])


  useEffect(()=>{
    fetch(`http://localhost:8080/forms`)
    .then((r)=>r.json())
    .then((d)=>{
      console.log("d",d)
      setForm(d)
     
    })
   
  },[])
  console.log("form",form)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!form.username) {
      ref.current.focus();
      ref.current.className += styles.redBorder;
    } else if (!form.password) passref.current.focus();
   
  };
  console.log("form", form);
  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <label>Name:</label>
        <input
          type="type"
          ref={ref}
          name="username"
          placeholder="Enter Name"
          // value={form.name}
          onChange={onChange}
          onKeyUp={onChange}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          // value={form.email}
          onChange={onChange}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          ref={passref}
          type="password"
          name="password"
          placeholder="Enter password"
          // value={form.password}
          onChange={onChange}
        />
        <br />
        <br /> <label>Number:</label>
        <input
          type="number"
          name="number"
          placeholder="Enter Number"
          // value={form.number}
          onChange={onChange}
        />
        <br />
        <br />
        <label>Age:</label>
        <input
          type="type"
          name="age"
          placeholder="Enter age"
          // value={form.age}
          onChange={onChange}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="isIndian"
          // value={form.isIndian}
          onChange={onChange}
        />
        <label>Is Indian:</label>
        <div>
          <div>
            <lable>City</lable>
            <select
              name="city"
              // value={form.city}
              onClick={onChange}
            >
              <option value="Delhi">Delhi</option>
              <option value="haryana">Haryana</option>
              <option value="uterPradesh">UterPradesh</option>
              <option value="rajesthan">Rajesthan</option>
            </select>
          </div>
          <input type="radio" name="gender" value="Male" onChange={onChange} />
          <label>Male:</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={onChange}
          />
          <label>Female:</label>
        </div>
        <div>
          <label>Resume:</label>
          <input
            type="file"
            accept="image/png,image/jpeg, application.pdf"
            name="resume"
            files={form.resume}
            onChange={onChange}
          />
        </div>
        <input type="submit" />
      </form>

       {/* <div>{form.map((e)=>{
       return( <p>{e.username}</p>
    )  })}</div>  */}
    </div>
  );
};
