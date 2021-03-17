import ExpandedPostPage from './pages/ExpandedPostPage';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/post">
           <ExpandedPostPage></ExpandedPostPage>
      </Route>

      <Route exact path= "/myprofile">
        <ProfilePage></ProfilePage>
      </Route>

      <Route exact path= "/upload">
        <UploadPage></UploadPage>
      </Route>

      </Switch>
    </Router>
      // <ProfilePage></ProfilePage>
    );
}

export default App;
