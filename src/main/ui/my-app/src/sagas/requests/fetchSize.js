const fetchGetSize = () => {
    return fetch("http://localhost:8080/students/numbers", {method: "GET", credentials: 'include', headers: {accept: 'application/json'} })
                .then((res) => res.json())
                .catch((err) => {throw err})
};


export default fetchGetSize;