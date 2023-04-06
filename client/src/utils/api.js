import axios from "axios";

const params = {
  header: {
    Authorization:
      "bearer" + ProcessingInstruction.env.REACT_APP_STRAPI_APP_KEY,
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
