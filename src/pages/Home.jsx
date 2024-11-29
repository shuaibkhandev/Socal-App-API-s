import React from "react";
import {
  facebookPageFollowers,
  facebookPageImpressions,
  facebookPageLikes,
  facebookPagePostsLikes,
  facebookPagePostsComments,
  facebookPagePostsShares,
  facebookAdCampaigns,
} from "../services/facebookServices";

import { youtubeVideoSearch } from "../services/youtubeServices";
import FacebookPageImpressions from "../components/FacebookPageImpressions";
import FacebookPageLikes from "../components/FacebookPageLikes";
import FacebookPageFollowers from "../components/FacebookPageFollowers";
import FacebookPagePostsLikes from "../components/FacebookPagePostsLikes";
import FacebookPagePostsComments from "../components/FacebookPagePostsComments";
import FacebookPagePostsShares from "../components/FacebookPagePostsShares";
import YoutubeVideoSearch from "../components/YoutubeVideoSearch";
import FacebookAdsCampaigns from "../components/FacebookAdsCampaigns";

const Home = () => {
  const [pageImpressions, setPageImpressions] = React.useState([]);
  const [pageLikes, setPageLikes] = React.useState({});
  const [pageFollowers, setPageFollowers] = React.useState({});
  const [pagePostsLikes, setPagePostsLikes] = React.useState([]);
  const [pagePostsComments, setPagePostsComments] = React.useState([]);
  const [pagePostsShares, setPagePostsShares] = React.useState([]);
  const [youtubeVideos, setYoutubeVideos] = React.useState([]);
  const [campaigns, setCampaigns] = React.useState([]);

  const ytSearch = async () => {
    try {
      const response = await youtubeVideoSearch();
      const videos = response.data.items;
      const formatedVideo = videos.map((video) => {
        return {
          videoId: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
        };
      });
      setYoutubeVideos(formatedVideo);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }

  };

  const fbPageImpressions = async () => {
    try {
      const response = await facebookPageImpressions();

      if (response.data) {
        setPageImpressions(response.data.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page impressions:", error);
    }
  };

  const fbPageLikes = async () => {
    try {
      const response = await facebookPageLikes();
      if (response.data) {
        setPageLikes(response.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page Likes:", error);
    }
  };

  const fbPageFollwers = async () => {
    try {
      const response = await facebookPageFollowers();

      if (response.data) {
        setPageFollowers(response.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page impressions:", error);
    }
  };

  const fbPagePostsLikes = async () => {
    try {
      const response = await facebookPagePostsLikes();

      if (response.data) {
        setPagePostsLikes(response.data.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page impressions:", error);
    }
  };

  const fbPagePostsComments = async () => {
    try {
      const response = await facebookPagePostsComments();
      if (response.data) {
        setPagePostsComments(response.data.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page impressions:", error);
    }
  };

  const fbPagePostsShares = async () => {
    try {
      const response = await facebookPagePostsShares();
      if (response.data) {
        setPagePostsShares(response.data.data);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error fetching Facebook page impressions:", error);
    }
  };

  const fetchCompaigns = async () => {
    try {
      const response = await facebookAdCampaigns();
      console.log("Ads Campaigns",response);
      
      if (response.data) {
        setCampaigns(response.data.data);
      } else {
        console.log("No campaigns data received");
      }
    } catch (error) {
      console.log("Error fetching campaigns:", error);
    }
  };

  

  React.useEffect(() => {
    ytSearch();
    fbPageImpressions();
    fbPageLikes();
    fbPageFollwers();
    fbPagePostsLikes();
    fbPagePostsComments();
    fbPagePostsShares();
    fetchCompaigns();
  }, []);

  return (
    <div className="">
      <YoutubeVideoSearch youtubeVideos={youtubeVideos} />
      <FacebookPageImpressions pageImpressions={pageImpressions} />
      <FacebookPageLikes pageLikes={pageLikes} />
      <FacebookPageFollowers pageFollowers={pageFollowers} />
      <FacebookPagePostsLikes pagePostsLikes={pagePostsLikes} />
      <FacebookPagePostsComments pagePostsComments={pagePostsComments} />
      <FacebookPagePostsShares pagePostsShares={pagePostsShares} />
      <FacebookAdsCampaigns campaigns={campaigns} />
    </div>
  );
};

export default Home;
