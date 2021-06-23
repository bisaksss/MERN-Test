import './App.css';
//import CounterClass from "./components/CounterClass"
//import CounterFunction from './components/CounterFunction';
import Header from "./components/Header"
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom"; 
import AllStudent from "./components/AllStudent"

function App() {
  return (
    <Router>
      <div>
        <Header/>

            <Route path="/addStudent" exact component={AddStudent}/>
            <Route path="/" exact component={AllStudent} />

    
       
      </div>
    </Router>
  );
}

export default App;
