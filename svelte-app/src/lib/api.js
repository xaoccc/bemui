export default async function fetchData() {
    const requestURL = 'https://api.jsonbin.io/v3/b/68ef7a62ae596e708f14f661';    
    const request = new Request(requestURL);    
    const response = await fetch(request);
    let data = await response.json();    
    return data.record;
}
