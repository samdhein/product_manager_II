import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Display from './views/Display';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/products/:id">
          <Detail />
          </Route>
          <Route path="/">
            <Display />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
