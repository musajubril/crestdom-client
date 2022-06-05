import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/index';
import Booking from './components/Booking/index';
import Rooms from './components/Rooms/index';
import Bursar from './components/Bursar/index';
import StudentDashboard from './components/Student/Dashboard/index';
function App() {
  return (
    <>
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/student" component={StudentDashboard} />
              <Route exact path="/bookings" component={Booking} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/bursar" component={Bursar} />
            </Switch>
        )}
         />
        </BrowserRouter>
    </>
  );
}

export default App;
