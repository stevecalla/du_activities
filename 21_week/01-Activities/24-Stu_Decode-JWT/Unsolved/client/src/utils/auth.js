import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    let newDate = Date.now();

    //section
    console.log({token}, decoded, {newDate});
    console.log({ newDate }, new Date(newDate), newDate / 1000);
    if (decoded.exp < Date.now() / 1000) {
    //section revised code
    // if (decoded.exp < Date.now()) {

      localStorage.removeItem('id_token');

      
      return true;
    }
    return false;
    
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
