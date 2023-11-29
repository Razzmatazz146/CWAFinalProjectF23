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