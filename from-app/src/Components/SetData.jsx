import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Select, Stack, Button ,TableContainer,Table,Tbody,Thead,Tr,Th,Td} from "@chakra-ui/react";
export const SetData = () => {
  const [showData, setshowData] = useState([]);
  const [page,setPage] = useState(1)
  const [data, setData] = useState({
    // id:uuidv4(),
  });

  useEffect(() => {
    fetch(`http://localhost:8080/formData?_page=${page}&_limit=4`)
      .then((r) => r.json())
      .then((d) => {
        // console.log("d", d);
        setshowData(d);
      });
  }, [page]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
  };
  // console.log('showData',showData)



// delete function.....
const hendleDelete=()=>{
let id= uuidv4()
// console.log("id",id);
 let deleteValue = showData.filter((del)=>del.id !==id);
    setshowData(deleteValue) 
  }






// sorting fucntion.....
  function sortAllData(el) {
    // console.log("el", el.branch);
    // console.log("el", el.order);

    // sort FirstName
    if (el.branch === "firstName" && el.order == "asc") {
      let res = showData.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
      setshowData([...res]);
      console.log("res", res);
    } else if (el.branch === "firstName" && el.order == "desc") {
      let f = showData.sort((a, b) => {
        return b.firstName.localeCompare(a.firstName);
      });
      setshowData([...f]);
      console.log("f", f);
    }

    //sort salery...

    if (el.branch === "salary" && el.order == "asc") {
      let res = showData.sort((a, b) => {
        return a.salary - b.salary;
      });
      setshowData([...res]);
      console.log("res", res);
    } else if (el.branch === "salary" && el.order == "desc") {
      let f = showData.sort((a, b) => {
        return b.salary - a.salary;
      });
      setshowData([...f]);
      console.log("f", f);
    }

    //sort age...

    if (el.branch === "age" && el.order == "asc") {
      let res = showData.sort((a, b) => {
        return a.age - b.age;
      });
      setshowData([...res]);
      console.log("res", res);
    } else if (el.branch === "age" && el.order == "desc") {
      let f = showData.sort((a, b) => {
        return b.age - a.age;
      });
      setshowData([...f]);
      console.log("f", f);
    }

    //eort  department .....
    if (el.branch === "department" && el.order == "asc") {
      let res = showData.sort((a, b) => {
        return a.department.localeCompare(b.department);
      });
      setshowData([...res]);
      console.log("res", res);
    } else if (el.branch === "department" && el.order == "desc") {
      let f = showData.sort((a, b) => {
        return b.department.localeCompare(a.department);
      });
      setshowData([...f]);
      console.log("f", f);
    }
  }

  // sortAllData()

  return (
    <div className="rentalContainer">
      <Stack spacing={3} display="flex" margin="auto">
        Sort By:{" "}
        <Select
          width="40%"
          margin="auto"
          height={10}
          onChange={handleChange}
          // value={showData.value}
          name="branch"
          // select dropdown needs both value and onChange
          className="sortby"
        >
          <option value="">Select</option>
          <option value="firstName">First Name</option>
          <option value="department">Department</option>
          <option value="age">Age</option>
          <option value="salary">Salary</option>
        </Select>
        Order:
        <Select
          width="40%"
          height={10}
          margin="auto"
          placeholder="Select option"
          onChange={handleChange}
          // value={showData.value}
          name="order"
          className="sortorder"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Button
          mt={3}
          margin="auto"
          width="20%"
          height={10}
          colorScheme="teal"
          type="submit"
          // margin="15px 155px"
          onClick={() => {
            sortAllData(data);
          }}
          className="sort"
        >
          Sort
        </Button>
      </Stack>
      <TableContainer marginRight="50%" overflowX="none" overflowY="none">
      <Table  className="table"  variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Sl.no.</Th>
            <Th>Name</Th>
            <Th>age</Th>
            <Th>Address</Th>
            <Th>Department</Th>
            <Th>Salary</Th>
            <Th>marital</Th>
            <Th>delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showData.map((fromData, i) => {
            return (
              <Tr key={uuidv4()} className="houseDetails">
                <Td>{i + 1}</Td>
                <Td>{fromData.firstName}</Td>
                <Td>{fromData.age}</Td>
                <Td>{fromData.address}</Td>
                <Td>{fromData.department}</Td>
                <Td>{fromData.salary}</Td>
                <Td>{fromData.marital}</Td>
                <Button onClick={hendleDelete}>delete</Button>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

</TableContainer>
<br></br>

      <Button disabled={page===1} onClick={()=>{setPage(page-1)}}>prev</Button>
  
      <Button marginLeft="50px" onClick={()=>{setPage(page+1)}}>Next</Button>
      <h3>{page}</h3>
</div>
  
  );
};
