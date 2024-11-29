import React from "react";

const FacebookPagePostsComments = ({ pagePostsComments }) => {
  return (
    <div>
      <h2>Facebook Page Posts Comments</h2>
      {pagePostsComments.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}
        >
          <p>
            <strong>Post</strong> {post.message}
          </p>
          {post.comments.summary.total_count != 0 ? (
            <div>
              {post.comments.data.map((comment, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <p>
                    {" "}
                    <strong>comment {index + 1}:</strong> {comment.message}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            "No Comments"
          )}
        </div>
      ))}
    </div>
  );
};

export default FacebookPagePostsComments;
