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

export { getallService };
