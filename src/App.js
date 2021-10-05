import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// COMPONENTS
import NotFound from "./components/NotFound";
// PAGES
import Landing from "./pages/Landing";
import AddItem from "./pages/AddItem";
import Item from './pages/Item'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path='/add-item' component={AddItem} />
          <Route path='/item/:id' component={Item} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
