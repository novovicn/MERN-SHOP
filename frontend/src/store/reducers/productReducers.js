export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] };
    case 'PRODUCT_LIST_SUCCESS':
      const { products, page, pages } = action.payload;
      return { loading: false, products, page, pages };
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topRatedProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'TOP_PRODUCTS_REQUEST':
      return { loading: true, products: [] };
    case 'TOP_PRODUCTS_SUCCESS':
      return { loading: false, products: action.payload };
    case 'TOP_PRODUCTS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAILS_REQUEST':
      return { loading: true, product: {} };
    case 'PRODUCT_DETAILS_SUCCESS':
      return { loading: false, product: action.payload };
    case 'PRODUCT_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true };
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_REQUEST':
      return { loading: true };
    case 'CREATE_PRODUCT_SUCCESS':
      return { loading: false, success: true, product: action.payload };
    case 'CREATE_PRODUCT_FAIL':
      return { loading: false, error: action.payload };
    case 'CREATE_PRODUCT_RESET':
      return {};
    default:
      return state;
  }
};

export const updateProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return { loading: true }
    case 'PRODUCT_UPDATE_SUCCESS':
      return { loading: false, success: true, product: action.payload }
    case 'PRODUCT_UPDATE_FAIL':
      return { loading: false, error: action.payload }
    case 'PRODUCT_UPDATE_RESET':
      return { product: {} }
    default:
      return state
  }
}

export const createProductReviewReducer = (state = { }, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_REVIEW_REQUEST':
      return { loading: true }
    case 'CREATE_PRODUCT_REVIEW_SUCCESS':
      return { loading: false, success: true }
    case 'CREATE_PRODUCT_REVIEW_FAIL':
      return { loading: false, error: action.payload }
    case 'CREATE_PRODUCT_REVIEW_RESET':
      return { product: {} }
    default:
      return state
  }
}