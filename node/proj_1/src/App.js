import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './pages/Home';
import { Form } from './pages/Form';


function App() {

    return (
        <div className="App">
          {/* <Form/> */}
          <Home/>
        </div>
    );
}

export default App;

const App = () => {
  return (
      <Router>
        <Switch>
          {
            getRoutes().map((route, index) => {
              return <Route exact {...route} key={index} />
            })
          }
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
}