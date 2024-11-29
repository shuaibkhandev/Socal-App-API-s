import youtubeAPI from "./youtubeAxiosinstance";


export const youtubeVideoSearch = () => {
    const data = youtubeAPI.get("search",{
    params : {
        key : "AIzaSyDOMkXJTEFGFPTi-0yPsDM45nK9X_cdbjk",
        type : "video",
        part : "snippet",
        maxResults : 10,
        q : "Javascript"
    }
    })

    return data;
}