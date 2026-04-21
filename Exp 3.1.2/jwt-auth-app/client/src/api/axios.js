// Mock API — no real backend needed for demo
const MOCK_USER = { id: 1, username: 'admin' };
const MOCK_PASSWORD = 'password123';

const api = {
  post: async (url, data) => {
    if (url === '/login') {
      if (data.username === MOCK_USER.username && data.password === MOCK_PASSWORD) {
        // encode a fake token: base64(payload)
        const token = btoa(JSON.stringify({ ...MOCK_USER, exp: Date.now() + 3600000 }));
        return { data: { token } };
      }
      const err = new Error('Invalid credentials');
      err.response = { data: { error: 'Invalid credentials' } };
      throw err;
    }
  },
  get: async (url) => {
    if (url === '/protected') {
      const token = localStorage.getItem('token');
      if (!token) {
        const err = new Error('Unauthorized');
        err.response = { status: 401 };
        throw err;
      }
      const user = JSON.parse(atob(token));
      return { data: { message: `Welcome ${user.username}`, user } };
    }
  }
};

export default api;
