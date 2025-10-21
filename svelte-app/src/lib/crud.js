const BIN_ID = "68ef7a62ae596e708f14f661";
const API_KEY = "$2a$10$20aYguq0wH.lvgoART0J2e3bcx4mMhYJ4O2s.KxH423I/BfviySSu";

export default async function updateBin(newData, index) {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`);
    const data = await res.json();
    const currentArray = data.record || [];
    let updatedArray;

    if (index === null) {
        // Replace entire dataset
        updatedArray = newData;
    } 
    else if (index === -1) {
        // Add new item
        updatedArray = Array.isArray(newData)
            ? [...currentArray, ...newData]
            : [...currentArray, newData];
    } 
    else {
        // Update or delete existing item
        updatedArray = [...currentArray];
        if (!newData) {
            updatedArray.splice(index, 1);
        } else {
            updatedArray[index] = newData;
        }
    }

    const updateRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        },
        body: JSON.stringify(updatedArray)
    });

    const result = await updateRes.json();
    return result;

}

