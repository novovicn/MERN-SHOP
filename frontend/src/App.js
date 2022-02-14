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
import OrderScreen from './screens/OrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import UserListScreen from './screens/UserListScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductEditScreen from './screens/ProductEditScreen';

function App() {
  return (
    <Router>
        <Header />
        <main className="py-3">
          <Container>
              <Route path="/login" component={LoginScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/orders/:id" component={OrderScreen} />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="/cart/:id?" component={CartScreen} exact />
              <Route path="/admin/users" component={UserListScreen} exact />
              <Route path="/admin/users/:id/edit" component={UserEditScreen} />
              <Route path="/admin/products" component={ProductListScreen} exact />
              <Route path="/admin/products/:id/edit" component={ProductEditScreen} />
              <Route path="/admin/orders" component={OrderListScreen} exact />
              <Route path="/search/:keyword" component={HomeScreen} />
              <Route path="/page/:page" component={HomeScreen} />
              <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
