import ExpandedPostPage from './pages/ExpandedPostPage';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from '../src/pages/Home';
import AccountSettings from '../src/pages/AccountSettings';
import Loading from '../src/pages/Loading';
import Login from '../src/pages/Login';
import ExpandedMedia from '../src/pages/ExpandedMedia';
import SignUp from '../src/pages/SignUp';
import EditPage from './pages/EditPage';

// import LandingPage from '../src/pages/LandingPage';
import SignupAvatar from '../src/pages/SignupAvatar';

function App() {
  return (
    <Router>
      <Switch>

      <Route exact path="/login">
           <Login></Login>
      </Route>

      <Route exact path="/">
           <Home></Home>
      </Route>

      <Route exact path="/setting">
           <AccountSettings></AccountSettings>
      </Route>

        <Route exact path="/post">
           <ExpandedPostPage></ExpandedPostPage>
      </Route>

      <Route exact path= "/myprofile">
        <ProfilePage></ProfilePage>
      </Route>

      <Route exact path= "/upload">
        <UploadPage></UploadPage>
      </Route>

      <Route exact path= "/signup">
        <SignUp></SignUp>
      </Route>

      <Route exact path ="/edit">
      <EditPage></EditPage>
      </Route>

      </Switch>
    </Router>
    );
}

export default App;

