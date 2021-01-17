import { ContactsOutlined } from "@material-ui/icons";

export const initialState = {
  basket: [],
  user:null,
  currentProducts:"",
  productId:"001",
  filterDisabled:true,
  price:400,
  delivery:6,
  starRating:3

};


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_FILTER":
      console.log("jhihihih");
      return{
       ...state,
       currentProducts: action.category,
       price: action.price,
       starRating: action.star,
       delivery: action.delivery,
       filterDisabled: action.disabled


      }
        

      
    case "CHANGE_PRODUCTS":
      
      return{
        ...state,
        currentProducts: action.item,
    };

    case "CHANGE_PRODUCT_ID":
      
      return{
        ...state,
        productId: action.item
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'EMPTY_BASKET':
        return {
            ...state,
            basket: []
        }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
