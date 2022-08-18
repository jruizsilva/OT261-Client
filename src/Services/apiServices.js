import axios from "axios";

function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { token: user.token };
  } else {
    return {};
  }
}

export const Get = async (routes) => {
  axios
    .get(`https://localhost:3000/${routes}`, authHeader())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const Post = async (routes) => {
  axios
    .post(`https://localhost:3000/${routes}`, authHeader())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

