import axios from 'axios';
const baseURL = process.env.REACT_APP_URL;


export const getTeams = async (token) => {
  try {
    const response = await axios.get(
      `${baseURL}/teams`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);

    return error;
  }
};
export const postCloud = async (token, data) => {
  try {
    const response = await axios.get(
      `${baseURL}/guest/clouds`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    
    return error;
  }
};
