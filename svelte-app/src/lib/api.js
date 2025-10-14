export default async function fetchData() {
    const requestURL = 'https://raw.githubusercontent.com/xaoccc/bemui/refs/heads/main/svelte-app/src/db/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    let data = await response.json();
    return data;
}
