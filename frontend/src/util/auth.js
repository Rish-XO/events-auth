export function getAuthtoken() {
    const token = localStorage.getItem('token');
    return token;
}