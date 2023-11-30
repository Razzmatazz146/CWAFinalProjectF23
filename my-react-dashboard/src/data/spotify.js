const token = await getToken();

async function getToken() {
    const url = "https://mywebapp-775f4.ue.r.appspot.com/spotify/token"
    const options = {
        method: "GET"
    }

    const response = await fetch(url, options)

    const body = await response.json()

    console.log("token: ", body.access_token);

    return body.access_token;
}

let keyword = "joji";
const resultData = await search(keyword, token);

async function search(keyword, token) {
    try {
        const url = "https://api.spotify.com/v1/search";
        const params = new URLSearchParams({ q: keyword, type: "track", limit: 1 });

        const options = {
            method: "GET",
            headers: { "Authorization": "Bearer " + token }
        };

        const response = await fetch(`${url}?${params}`, options);
        const data = await response.json();
        console.log("Search data:", JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error("Error in search: ", error);
    }
}