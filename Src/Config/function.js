import axios from "axios";
let getallService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://servicesproviderapp.herokuapp.com/api/get/getServices")
      .then(function (response) {
        resolve(response.data.posts);
      })
      .catch(function (error) {
        reject(error.message);
        console.log(error.message);
      });
  });
};

let getCurrentUserOrder = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://servicesproviderapp.herokuapp.com/api/get/getCurrentUserOrder?uid=${uid}`
      )
      .then(function (response) {
        resolve(response.data.posts);
      })
      .catch(function (error) {
        reject(error.message);
        console.log(error.message);
      });
  });
};

let getAllOrders = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://servicesproviderapp.herokuapp.com/api/get/getCurrentUserOrder`
      )
      .then(function (response) {
        resolve(response.data.posts);
      })
      .catch(function (error) {
        reject(error.message);
        console.log(error.message);
      });
  });
};
export { getallService, getCurrentUserOrder, getAllOrders };
