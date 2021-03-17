import ExpandedPostPage from './pages/ExpandedPostPage';
import ProfilePage from './pages/ProfilePage';

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
      </Switch>
    </Router>
      // <ProfilePage></ProfilePage>
    );
}

export default App;
