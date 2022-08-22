import React from "react";

const NewsCard = (props) => {
 
    return (
            <div className="containernews">
          <p className="text">{props.text}</p>
          <img src={props.img}  alt= "img news" className="imgnews" />
          </div>
        );
    };
    
    
    export default NewsCard;