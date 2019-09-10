const handleFetch = (url, method, body) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.text())
        .catch(error => console.error(error));
}

export default handleFetch