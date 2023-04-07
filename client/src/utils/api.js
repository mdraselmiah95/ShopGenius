import axios from "axios";

const base_URL = "http://localhost:1337";
const token =
  "da93d8b160484d02e29c2e816b848b32866aeed3143c55a1251b1f7d6948e1fee1938ae1ca590e292ac42bf095380446845cf82be034a39a990dddf34d44b54ce7f1c3212cfa18ee9a985f796fd7e6062ea9c5b9fe11b91bf8502b0570163bfd7c6cff84a44250d08b87c5c78408321f71579740d2e9b11eb2768ac84b89ed02";

const params = {
  headers: {
    Authorization: "bearer " + token,
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(base_URL + url, params);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
