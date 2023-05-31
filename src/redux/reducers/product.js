import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  product: [
    {
      name: "Product 1",
      description: "This is the description for Product 1.",
      category: "Electronics",
      tags: ["electronics", "gadgets"],
      originalPrice: 49.99,
      discountPrice: 39.99,
      stock: 20,
      images: ["product1_1.jpg", "product1_2.jpg", "product1_3.jpg"],
      reviews: [
        {
          user: { name: "John Doe", email: "johndoe@example.com" },
          rating: 4,
          comment: "Great product!",
          productId: "product1",
          createdAt: "2023-05-30T10:00:00.000Z",
        },
        {
          user: { name: "Jane Smith", email: "janesmith@example.com" },
          rating: 5,
          comment: "Excellent quality!",
          productId: "product1",
          createdAt: "2023-05-31T15:30:00.000Z",
        },
      ],
      ratings: 4.5,
      shopId: "shop1",
      shop: { name: "Electronics Paradise", location: "City A, Country A" },
      sold_out: false,
      createdAt: "2023-05-29T08:45:00.000Z",
    },
    {
      name: "Product 2",
      description: "This is the description for Product 2.",
      category: "Fashion",
      tags: ["fashion", "clothing"],
      originalPrice: 79.99,
      discountPrice: 69.99,
      stock: 15,
      images: ["product2_1.jpg", "product2_2.jpg", "product2_3.jpg"],
      reviews: [
        {
          user: { name: "Emily Johnson", email: "emilyjohnson@example.com" },
          rating: 4,
          comment: "Stylish and trendy!",
          productId: "product2",
          createdAt: "2023-06-01T09:15:00.000Z",
        },
        {
          user: { name: "Alex Brown", email: "alexbrown@example.com" },
          rating: 5,
          comment: "Perfect fit, love it!",
          productId: "product2",
          createdAt: "2023-06-02T14:45:00.000Z",
        },
      ],
      ratings: 4.5,
      shopId: "shop2",
      shop: { name: "Fashion Hub", location: "City B, Country B" },
      sold_out: false,
      createdAt: "2023-05-30T11:20:00.000Z",
    },
    // ... Continue with more products
  ],
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.product = state.product;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
