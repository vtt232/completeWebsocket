
export const fetchGetStudent = async (pageNum) => {
    return fetch(`http://localhost:8080/students/?page=${pageNum-1}`, {method: "GET", credentials: 'include', headers: {accept: 'application/json'} })
                .then((res) =>  res.json())
                .catch((err) => {throw err})
};

export const fetchModifiedStudent = async (queryRequest) => {
    return fetch(queryRequest.url,
                {method: queryRequest.method? queryRequest.method : 'GET', credentials: 'include', 
                headers: queryRequest.headers? queryRequest.headers : {accept: 'application/json'},
                body: queryRequest.body? JSON.stringify(queryRequest.body):null})
        .then((res) =>  res.json())
        .catch((err) => {throw err})
}
