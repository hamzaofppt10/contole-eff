
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Navbar from './Navbar';
import Expert from './Expert';
import AddExpert from './AddExpert';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experts" element={<Expert />} />
        <Route path="/addexpert" element={<AddExpert />} />
      </Routes>
    </Router>
  );
}
export default App