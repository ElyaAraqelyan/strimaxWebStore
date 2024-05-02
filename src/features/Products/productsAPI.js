import axios from "axios";

export default class fetchProducts {
  static async getAll() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      res.data.forEach((product) => {
        product.added = false;
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      res.data.added = false;
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  static async getByCategory(category) {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      res.data.forEach((product) => {
        product.added = false;
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
  static async postProduct(product) {
    try {
      const res = await axios.post(
        "https://fakestoreapi.com/products",{
          ...product,
          added: false,
          rating: {
            rate: 0,
            count: 0,
          }
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
