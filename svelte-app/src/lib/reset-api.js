export default async function resetData() {
    const API_KEY = '$2a$10$20aYguq0wH.lvgoART0J2e3bcx4mMhYJ4O2s.KxH423I/BfviySSu'
    const requestURL = 'https://api.jsonbin.io/v3/b/68ef79ba43b1c97be9693bc9';
    const request = new Request(requestURL, {headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        }});
    const response = await fetch(request);
    let data = await response.json();
    return data.record
}