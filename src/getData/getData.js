  const axios = require('axios');
const mapArrToString = require('../marArrToString/mapArrToString');

const getData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const userIds = response.data.map((user) => user.id);
    console.log(mapArrToString(userIds))
    return mapArrToString(userIds);
  
  } catch (e) {
    console.log(e);
  }
};

module.exports = getData;
