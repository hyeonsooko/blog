import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

function AutoCloseExample() {
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h4>
          React Blog
        </h4>
      </div>
      <AutoCloseExample />
    </div>
  );
}

export default App;
