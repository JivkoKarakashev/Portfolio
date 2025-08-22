const verifyToken = async (token: string): Promise<Response> => {
    return fetch(import.meta.env.VITE_TURNSTILE_VERIFY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ token }),
        credentials: 'include'
    });
};

export {
    verifyToken
}