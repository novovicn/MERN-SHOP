import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../store/actions/productActions';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword;
  const page = match.params.page;

  const dispatch = useDispatch();
  const { loading, products, error, pages, page:currentPage } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword, page));
  }, [dispatch, keyword, page]);

  return (
    <>
    <Meta/>
    {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate page={currentPage} pages={pages}/>
        </>
      )}
    </>
  );
};

export default HomeScreen;
