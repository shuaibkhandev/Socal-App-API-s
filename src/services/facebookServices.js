import facebookApi from "./facebookAxiosInstance";

export const facebookPageImpressions = () => {
    const data = facebookApi.get(
      "109102598622611/insights/page_impressions_unique/",{
      params: {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
      }}
    );

    return data;
  };


  export const facebookPageLikes = () => {
    const data = facebookApi.get("109102598622611",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : "fan_count"
      }
    })

    return data;
  }


  export const facebookPageFollowers = () => {
    const data = facebookApi.get("109102598622611",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : "followers_count"
      }
    })

    return data;
  }


  export const facebookPagePostsLikes = () => {
    const data = facebookApi.get("109102598622611/posts",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : 'reactions.type(LIKE).summary(total_count)'
      }
    })

    return data;
  }

  export const facebookPagePostsComments = () => {
    const data = facebookApi.get("109102598622611/posts",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : 'id,message,comments.summary(true)'
      }
    })

    return data;
  }


  export const facebookPagePostsShares = () => {
    const data = facebookApi.get("109102598622611/posts",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : 'id,message,shares'
      }
    })

    return data;
  }


  export const facebookAdCampaigns = () => {
    const data = facebookApi.get("act_3258556757724245/campaigns",{
      params : {
        access_token: import.meta.env.VITE_FB_ACCESS_TOKEN,
        fields : 'id,name,status,objective,spend_cap'
      }
    })

    return data;
  }

