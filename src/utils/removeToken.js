export function removeToken() {
    const tokenString = sessionStorage.getItem('token');
    sessionStorage.removeItem(tokenString);
}

export {removeToken}