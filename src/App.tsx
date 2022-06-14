import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/index';
import Booking from './components/Booking/index';
import Rooms from './components/Rooms/index';
import Bursar from './components/Bursar/index';
import StudentDashboard from './components/Student/Dashboard/index';
import Login from "components/Auth/Login";
import LandingPage from "components/Auth/LandingPage";
import CreateAccountStudent from "components/Auth/CreateAccountStudent";
import BursarList from "components/BursarModule/Lists";
import BursarDashboard from "components/BursarModule/Dashboard";
import StudentRooms from "components/Student/Rooms";
import CreateAccountAdmin from "components/Auth/CreateAccountAdmin";
import jwtDecode from "jwt-decode";
import CreateAccountBursar from "components/Auth/CreateAccountBursar";
function App() {
  console.log(localStorage?.crescent_token ? jwtDecode(localStorage?.crescent_token) : "No Token Specified")
  return (
    <>
    <BrowserRouter>
        <Route
        render={({location}) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/admin" component={Dashboard} />
              <Route exact path="/bursar" component={BursarDashboard} />
              <Route exact path="/bursar/all" component={BursarList} />
              <Route exact path="/bursar/verified" component={BursarList} />
              <Route exact path="/bursar/verify-account" component={CreateAccountBursar} />
              <Route exact path="/bursar/not-verified" component={BursarList} />
              <Route exact path="/student" component={StudentDashboard} />
              <Route exact path="/student/rooms" component={StudentRooms} />
              <Route exact path="/student/private" component={StudentRooms} />
              <Route exact path="/student/general" component={StudentRooms} />
              {/* <Route exact path="/student/apartment-info" component={StudentDashboard} /> */}
              <Route exact path="/admin/bookings" component={Booking} />
              <Route exact path="/admin/rooms" component={Rooms} />
              <Route exact path="/admin/bursar" component={Bursar} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create-account" component={CreateAccountStudent} />
              <Route exact path="/admin/verify/create-account" component={CreateAccountAdmin} />
            </Switch>
        )}
         />
        </BrowserRouter>
    </>
  );
}

export default App;
