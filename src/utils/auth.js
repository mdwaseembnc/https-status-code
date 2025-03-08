// src/utils/auth.js
export const checkAuth = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };
  
  export const ssoProviders = [
    { name: 'Google', id: 'google' },
    { name: 'Microsoft', id: 'microsoft' },
    { name: 'GitHub', id: 'github' }
  ];