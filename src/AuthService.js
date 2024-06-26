import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const AuthService = {
  login: (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password })
      .then(response => {
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },
  logout: () => {
    localStorage.removeItem('user');
  },
};

export default AuthService;
