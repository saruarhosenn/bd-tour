import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import AllPackages from './Pages/AllPackages/AllPackages';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import AouthProvider from './Components/Context/AouthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BuyForm from './Pages/BuyForm/BuyForm';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddPackage from './Pages/AddPackage/AddPackage';
import AllOrders from './Pages/AllOrders/AllOrders';

function App() {
  return (
    <>
      <AouthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/packages">
              <AllPackages />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrders />
            </PrivateRoute>
            <Route path="/addPackage">
              <AddPackage />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/packageDetails/:id">
              <PackageDetails />
            </Route>
            <PrivateRoute path="/buyForm/:id">
              <BuyForm />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AouthProvider>
    </>
  );
}

export default App;
