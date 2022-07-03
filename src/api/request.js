export const request = (url, params = {}) => {
     const method = params.method ?? 'GET'; 
     const requestOptions = { method }; 
     if (params.body) 
     { requestOptions.body = params.body
    return fetch(url, requestOptions )
  } else {
      return fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("ERROR");
      });
    }} 