export function getAuthtoken() {
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader() {
    return getAuthtoken();
}