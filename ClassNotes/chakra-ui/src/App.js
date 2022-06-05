import './App.css';
import { Button } from '@chakra-ui/react'
import { WithSubnavigation } from './Components/Navbar';
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <WithSubnavigation/>
        <Button colorScheme='blue' size='sm'>
    Button
  </Button>
    </div>
  );
}

export default App;
