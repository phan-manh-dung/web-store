// reducers/productReducer.js
const initialState = {
    deleteUrl: '/product/delete',
    updateUrl: '/update',
    createUrl: '/create',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productReducer;
