import * as types from "../actionType";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export const addItemToCart = (items) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: items,
});

export const removeItemFromCart = (items) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: items,
});

export function fetchPosts(data) {
  return async function (dispatch) {
    dispatch(fetchPostStart())
    try {
      // You can perform any additional logic or data processing here before dispatching fetchPostSuccess
      dispatch(fetchPostSuccess( {data} ));
    //   console.log(data);
    } catch (error) {
      dispatch(fetchPostFail(error.message));
    }
  };
}
