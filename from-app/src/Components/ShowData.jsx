import React from "react";
import { useState } from "react";
import { FormDetail } from "./FormDetail";
import { SetData } from "./SetData";
import { Heading,Box ,Button } from "@chakra-ui/react";
export const ShowData = () => {
  const [show, setShow] = useState(false);
  return (

<Box maxW='32rem' margin="auto" textAlign="center">
  <Heading mb={4} > ShowData</Heading>
  <Button   mt={4}
        colorScheme="teal"
        type="submit"
        margin="15px 155px"
  onClick={() => setShow((prev) => !prev)}
  >
  {show ? "Shpw Data" : "Hide Data"}
  </Button>
  {show ? <FormDetail /> : <SetData />}
</Box>
  );
};
