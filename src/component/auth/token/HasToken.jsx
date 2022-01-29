export function HasToken() {
    const hasToken = window.sessionStorage.getItem('token');
    if (hasToken) return true;
    return false;
}