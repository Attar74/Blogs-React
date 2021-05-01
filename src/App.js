import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import NotFound from './NotFound';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content" >
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/blogs/:id" exact>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}