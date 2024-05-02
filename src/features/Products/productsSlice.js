import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./productsAPI";

const initialState = {
  products: [],
  product: null,
  productsByCategory: [],
  status: "idle",
  searchResults: [],
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const products = fetchProducts.getAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "productById/fetchProducts",
  async (id) => {
    try {
      const product = fetchProducts.getById(id);
      return product;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductByCategoryAsync = createAsyncThunk(
  "productsBtCategory/fetchProducts",
  async (category) => {
    try {
      const product = fetchProducts.getByCategory(category);
      return product;
    } catch (error) {
      throw error;
    }
  }
);

export const postProductAsync = createAsyncThunk(
  "products/postProduct",
  async (product) => {
    try {
      const prod = fetchProducts.postProduct(product);
      return prod;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search(state, { payload }) {
      state.searchResults = state.products.filter((product) =>
        product.title.toLowerCase().includes(payload.toLowerCase())
      );
    },
    addToBasket(state, { payload }) {
      state.products.map((product) =>
        product.id === payload ? (product.added = true) : ""
      );
    },
    addToBasketOnlyItem(state) {
      state.product.added = true;
    },
    removeFromBasket(state, { payload }) {
      state.products.map((product) =>
        product.id === payload ? (product.added = false) : ""
      );
    },
    setTitle(state, { payload }) {
      state.title = payload;
    },
    setPrice(state, { payload }) {
      state.price = payload;
    },
    setDescription(state, { payload }) {
      state.description = payload;
    },
    setCategory(state, { payload }) {
      state.category = payload;
    },
    setImage(state, { payload }) {
      state.image = payload;
    },
    deleteProduct(state, {payload}){
      state.products = state.products.filter(product => product.id !== payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductByCategoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productsByCategory = action.payload;
      })

      .addCase(postProductAsync.fulfilled, (state, action) => {
        const product = action.payload;
        state.status = "succeeded";
        state.products.unshift({
          ...product,
          id: new Date().getTime().toString(),
          added: false,
          rating: {
            rate: 0,
            count: 0,
          },
        });
      });
  },
});

export const {
  search,
  addToBasket,
  addToBasketOnlyItem,
  removeFromBasket,
  setCategory,
  setDescription,
  setImage,
  setPrice,
  setTitle,
  deleteProduct
} = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;
export const selectProductById = (state) => state.products.product;
export const selectProductByCategory = (state) =>
  state.products.productsByCategory;
export const selectSearchResult = (state) => state.products.searchResults;
export const selectState = (state) => state.products;

export const productsReducer = productsSlice.reducer;
