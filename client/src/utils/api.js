import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.VITE_REACT_APP_STRAPI_APP_KEY,
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.VITE_REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.VITE_REACT_APP_PAYMENT_KEY,
  },
});
