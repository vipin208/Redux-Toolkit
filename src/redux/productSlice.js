
const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const final = await res.json();
    return final;
  });

const Productslice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  reducers: {
    resetProducts: (state) => {
      state.data = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export const { resetProducts } = Productslice.actions;
export default Productslice.reducer;