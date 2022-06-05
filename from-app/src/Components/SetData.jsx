
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const SetData = () => {

  const [showData, setshowData] = useState([])
  const [data, setData] = useState("")

useEffect(() => {
    fetch(`http://localhost:8080/formData`)
      .then((r) => r.json())
      .then((d) => {
        // console.log(d);
        setshowData(d);
      });
  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    })

  }
  return (
    <div className="rentalContainer">
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            onChange={handleChange}
            // value={showData.value}
            name="branch"
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="Department">Department</option>
            <option value="age">Age</option>
            <option value="Salary">Salary</option>

          </select>
        </div>
        <div>
          Order:
          <select
            onChange={handleChange}
            // value={showData.value}
            name="type"
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button onClick={() => {
        }} className="sort">sort</button>
      </div>


      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>marital</th>

          </tr>
        </thead>
        <tbody>
          {showData.map((fromData, i) => {


            return (
              <tr key={uuidv4()} className="houseDetails">
                <td>{i + 1}</td>
                <td>{fromData.firstName}</td>
                {/* <td>{fromData.email}</td> */}
                <td>{fromData.age}</td>
                <td>{fromData.address}</td>
                <td>{fromData.department}</td>
                <td>{fromData.salary}</td>
                <td >{fromData.martial ? "married" : "unmarried"}
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};