
// base url
const BaseUrl ="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=";
// APIkey
const APIkey= "Keep Your api key here";



export const callAPI = (inputText: unknown) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "contents": [{ "parts": [{ "text": inputText }] }]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(`${BaseUrl}${APIkey}`, requestOptions)
        .then((response) => response.json());
};