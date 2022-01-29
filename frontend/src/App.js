import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
  return (
    <Router>
        <Header />
        <main className="py-3">
          <Container>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/login" component={LoginScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="/cart/:id?" component={CartScreen} exact />
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
