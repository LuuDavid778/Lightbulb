import ExpandedPostPage from './pages/ExpandedPostPage';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios'


import Home from '../src/pages/Home';
import AccountSettings from '../src/pages/AccountSettings';
import Loading from '../src/pages/Loading';
import Login from '../src/pages/Login';
import ExpandedMedia from '../src/pages/ExpandedMedia';
import SignUp from '../src/pages/SignUp';
import EditPage from './pages/EditPage';



function App() {

  const token = sessionStorage.getItem("token");
  if(token){
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
  }

  return (
    <Router>
      <Switch>
      <Route exact path="/">
           <Home></Home>
      </Route>


      <Route exact path="/login">
           <Login></Login>
      </Route>


      <Route exact path= "/upload">
        <UploadPage></UploadPage>
      </Route>

      <Route exact path= "/myprofile">
        <ProfilePage></ProfilePage>
      </Route>

      <Route exact path="/settings">
           <AccountSettings></AccountSettings>
      </Route>

      <Route exact path="/post/:id">
           <ExpandedPostPage></ExpandedPostPage>
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
