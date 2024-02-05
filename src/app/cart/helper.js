const { Provider } = ReactRedux;
const { Grid, Row, Col, Button } = ReactBootstrap;

// data stores
const dataStore = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "Blue Hoodie",
    code: "Hodie-B",
    color: "Blue",
    size: "M",
    price: 17.99,
    note: "Note, 1 piece"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA4NjE0MjN8&ixlib=rb-4.0.3&q=85",
    name: "White Hoodie",
    code: "Hodie-W",
    color: "White",
    size: "M",
    price: 35.99
  }
];

const ActionTypes = {
  CART_ADD: "CART_ADD",
  CART_MINUS: "CART_MINUS",
  CART_REMOVE: "CART_REMOVE"
};

const initialState = {
  dataStore: dataStore,
  totalOrder: 0,
  orders: []
};

const reducer = (state = initialState, action) => {
  function getTotal(cartItems) {
    const cartQuantity = cartItems.reduce(
      (quantity, item) => item.quantity * item.price + quantity,
      0
    );

    return cartQuantity;
  }

  let orderIndex = state.orders.findIndex((x) => x.id == action.payload.id);
  let orders = state.orders;
  switch (action.type) {
    case ActionTypes.CART_REMOVE:
      let dataStores = state.dataStore.filter((x) => x.id != action.payload.id);
      let order = state.orders.filter((x) => x.id != action.payload.id);
      return {
        ...state,
        dataStore: dataStores,
        totalOrder: getTotal(order),
        orders: order
      };
    case ActionTypes.CART_ADD:
      if (orderIndex >= 0) {
        orders[orderIndex].quantity = orders[orderIndex].quantity + 1;
      } else {
        let order = {
          ...action.payload,
          quantity: 1
        };

        orders.push(order);
      }
      return {
        ...state,
        totalOrder: getTotal(orders),
        orders: orders
      };
    case ActionTypes.CART_MINUS:
      if (orderIndex >= 0) {
        if (orders[orderIndex].quantity > 0) {
          orders[orderIndex].quantity = orders[orderIndex].quantity - 1;
        }
      }

      return {
        ...state,
        totalOrder: getTotal(orders),
        orders: orders
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Card
function Card(props) {
  return <div className="card">{props.children}</div>;
}

// currency
function formatCurrency(number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

// amount store
const AmountStore = (function () {
  const mapStateToProps = (state) => {
    return {
      totalOrder: state.totalOrder
    };
  };

  return ReactRedux.connect(mapStateToProps)(AmountStoreConnect);
})();

function AmountStoreConnect(props) {
  return (
    <div className="store-item mt-2">
      <Row>
        <Col>
          <div className="list-store d-flex align-items-center justify-content-between">
            <p>Temporary amount</p>
            <p>{formatCurrency(props.totalOrder)}</p>
          </div>
          <div className="list-store d-flex align-items-center justify-content-between">
            <p>Shipping</p>
            <p>Gratis</p>
          </div>
          <div className="bottom-line"></div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="col-6">
          <p className="p-total-label">The total amount of (Including VAT)</p>
        </Col>
        <Col className="col-6">
          <p className="p-total">{formatCurrency(props.totalOrder)}</p>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <Button className="w-100" bsStyle="primary" bsSize="medium" block>
            Go To Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
}

// store items
function StoreItemConnect(props) {
  return (
    <div
      className={
        props.line ? "mt-2 store-item bottom-line pb-3" : "store-item mt-2"
      }
    >
      <Row>
        <Col lg={3}>
          <img className="image-store" src={props.image} alt={props.name} />
        </Col>
        <Col lg={9}>
          <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
            <h4>{props.name}</h4>
            <div>
              <div
                className="btn-quantity-container d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="btn-quantity" onClick={props.handleLess}>
                  &minus;
                </Button>
                <span className="p-quantiry">{props.order}</span>
                <Button className="btn-quantity" onClick={props.handlePluss}>
                  +
                </Button>
              </div>
            </div>
          </div>
          <div className="list-store d-flex align-items-center justify-content-between">
            <p>{props.code}</p>
            {props.note ? <p className="p-note">({props.note})</p> : ""}
          </div>
          <div className="list-store d-flex align-items-center justify-content-between">
            <p>Color : {props.color}</p>
          </div>
          <div className="list-store d-flex align-items-center justify-content-between">
            <p>Size : {props.size}</p>
          </div>
          <div className="list-store d-flex align-items-center justify-content-between">
            <div className="d-flex gap-2">
              <Button
                className="btn-list"
                bsSize="xsmall"
                onClick={props.handleRemove}
              >
                <i className="fa fa-trash"></i>
                <span> Remove Item</span>
              </Button>
              <Button
                className="btn-list"
                bsSize="xsmall"
                onClick={props.handleFavorite}
              >
                <i className="fa fa-heart"></i>
                <span> Move To Wish List</span>
              </Button>
            </div>
            <div className="d-flex">
              <h5>{formatCurrency(props.price)}</h5>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const StoreItem = (function () {
  const mapStateToProps = (state, props) => {
    return {
      order: state.orders.find((x) => x.id == props.id)?.quantity
        ? state.orders.find((x) => x.id == props.id)?.quantity
        : 0
    };
  };
  const mapDispatchToProps = (dispatch, props) => {
    return {
      handlePluss: () =>
        dispatch({ type: ActionTypes.CART_ADD, payload: { ...props } }),
      handleLess: () =>
      
        dispatch({ type: ActionTypes.CART_MINUS, payload: { ...props } }),
      handleRemove: () =>
        dispatch({ type: ActionTypes.CART_REMOVE, payload: { ...props } }),
      handleFavorite: () =>
        dispatch({ type: ActionTypes.CART_REMOVE, payload: { ...props } })
    };
  };

  return ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
  )(StoreItemConnect);
})();

// render
const App = (function () {
  const mapStateToProps = (state, props) => {
    return {
      stores: state.dataStore
    };
  };

  return ReactRedux.connect(mapStateToProps)(AppConnect);
})();

function AppConnect({ stores }) {
  return (
    <Grid className="pt-4 pb-4">
      <h2 className="text-center">Shopping Cart</h2>
      <Row className="mt-5 gap-3 gap-md-0 gap-lg-0">
        <Col lg={8} md={7}>
          <Card className="card">
            <h4>Cart ({stores.length} items)</h4>
            {stores.map((item, index) => (
              <StoreItem
                key={index}
                {...item}
                line={index + 1 < dataStore.length ? true : false}
              />
            ))}
          </Card>
        </Col>
        <Col lg={4} md={5}>
          <Row className="gap-3">
            <Col>
              <Card className="card">
                <h4>The total amount of</h4>
                <AmountStore />
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <div className="d-flex align-items-center justify-content-between">
                  <p>Add a discount code (optional)</p>
                  <p>
                    <i className="fa fa-chevron-down"></i>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
