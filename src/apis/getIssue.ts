import axios from 'axios';

const getIssue = async () => {
  const res = await axios.get(`https://api.github.com/repos/facebook/create-react-app/issues`);
  return res.data;
};

export default getIssue;
