import React from "react";

const NewsCard = (props) => {
 
    return (
     
      <div class="col">
        <div class="card text-dark bg-info mb-3">
          <img src={props.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Novedades</h5>
            <p class="card-text">{props.text}</p>
          </div>
          <button class="btn btn-primary btn-lg" type="button">Ver Novedades</button>
          </div>
        </div>
     
    
  );
}
    
    
    export default NewsCard;