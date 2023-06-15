const cart = [];
const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const product = action.payload.product;
      const existingProduct = state.find((p) => p.id === product.id);
      if (existingProduct) {
        return state.map((p) =>
          p.id === existingProduct.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
      break;
    case "DELITEM":
      const productToRemove = action.payload.product;
      const eexistingProduct = state.find((p) => p.id === productToRemove.id);
       if (eexistingProduct.qty === 1) {
        return state.filter((p) => p.id !== productToRemove.id);
      } else {
        return state.map((p) =>
          p.id === eexistingProduct.id ? { ...p, qty: p.qty - 1 } : p
        );
      }
      break
      case "DELETEITEM":
        const productId = action.payload.productId;
        return state.filter((p) => p.id !== productId);
  
      default:
      return state;
      break     
    
  }
};

export default handleCart;

// return state.filter((p) => p.id !== action.payload.id);
// default:
//   return state;
