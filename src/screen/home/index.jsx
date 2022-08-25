import Slider from '../../Components/Slider/Slider';
import  NewsCard from './Newscard'
import { Body, Containernews, Homeimg, News, Title } from './styledcomponents/styled';
import { news, title, slides } from './const';

const Home = () => { 
return (
     <Body>
    <Title>
<div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{title.title}</h1>
        <p class="col-md-8 fs-4">{title.body}</p>
        <button class="btn btn-danger btn-lg" type="button">Conctactenos</button>
      </div>
    </div>
    </Title>
    <Homeimg>
    <Slider slides={slides} classes={["w-50"]} />
    </Homeimg>
     <div>
   <News>
   Últimas noticias
   </News>
   <Containernews>
   <div class="row row-cols-1 row-cols-md-4 g-4">
   {
    news &&
    news.map((e) =>{
    return(
    < NewsCard
    img = {e.img}
    text = {e.text}
    />
    )
     })}
     </div>
    </Containernews>
     </div>
     </Body>
)
};



export default Home;
