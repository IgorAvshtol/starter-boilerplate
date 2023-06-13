import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_BASE_API);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
