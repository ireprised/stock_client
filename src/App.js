import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login'
import Admin from './Pages/Admin/Admin';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Registration from './Pages/Registration/Registration';
import UpdateData from './Pages/Admin/UpdateData/UpdateData';
import DamageProducts from './Pages/Admin/DamageProducts/DamageProducts';
import AdminRoute from './Pages/Admin/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <PrivetRoute path="/admin">
            <Admin/>
          </PrivetRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
          <AdminRoute path="/update/:id">
            <UpdateData/>
          </AdminRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>  
  );
}

export default App;
