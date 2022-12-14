import Create from './Components/Create';
import Read from './Components/Read';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container fluid>
      <h2>ToDo App</h2>
      <BrowserRouter>
        <Router>
          <Route exact path='/create' element={<Create />}/>
          <Route exact path='/' element={<Read />}/>

        </Router>
      </BrowserRouter>
    </Container>
  );
}

export default App;
