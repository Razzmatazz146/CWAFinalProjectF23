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




async function search(keyword, token) {
    try {
        const url = "https://api.spotify.com/v1/search";
        const params = new URLSearchParams({ q: keyword, type: "track", limit: 10 });

        const options = {
            method: "GET",
            headers: { "Authorization": "Bearer " + token }
        };

        const response = await fetch(`${url}?${params}`, options);
        const data = await response.json();

        let tracksInfo = [];

        for (let track of data.tracks.items) {
            const albumName = track.album.name;
            const artistName = track.artists.map(artist => artist.name).join(", ");
            const songName = track.name;
            const durationMs = track.duration_ms;
            const previewUrl = track.preview_url;

            tracksInfo.push({
                album: albumName,
                artist: artistName,
                song: songName,
                duration: durationMs,
                url: previewUrl
            });
        }

        console.log("Tracks Info:", tracksInfo);
        return tracksInfo;

    } catch (error) {
        console.error("Error in search: ", error);
    }

}

export async function performSearch(keyword) {

  const token = await getToken();
  const resultData = await search(keyword, token);
  console.log(resultData);
  return resultData;
}