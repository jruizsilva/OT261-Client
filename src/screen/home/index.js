import { Link } from 'react-router-dom';
import SlidesForm from '../../Components/Slides/SlidesForm';
import './Home.css'
import { useState, useEffect } from 'react';
import NewsCard from './Newscard';

const news = [
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:`Lorem ipsum dolor sit amet. Et repudiandae laborum hic quia galisum qui possimus corrupti sit quibusdam commodi et 
  sint laboriosam nam pariatur fugiat.At corrupti dolores ut amet pariatur ad dolores totam sed blanditiis omnis
   nam veniam rerum qui nemo velit. Qui facilis sint et quia voluptas ea rerum debitis cum explicabo perferendis a 
   eligendi laboriosam. 
  Est odit dicta et illo tempore id reprehenderit error vel molestiae eaque qui amet rerum? `,
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:`Lorem ipsum dolor sit amet. Et repudiandae laborum hic quia galisum qui possimus corrupti sit quibusdam commodi et 
  sint laboriosam nam pariatur fugiat.At corrupti dolores ut amet pariatur ad dolores totam sed blanditiis omnis
   nam veniam rerum qui nemo velit. Qui facilis sint et quia voluptas ea rerum debitis cum explicabo perferendis a 
   eligendi laboriosam. 
  Est odit dicta et illo tempore id reprehenderit error vel molestiae eaque qui amet rerum? `,
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:`Lorem ipsum dolor sit amet. Et repudiandae laborum hic quia galisum qui possimus corrupti sit quibusdam commodi et 
  sint laboriosam nam pariatur fugiat.At corrupti dolores ut amet pariatur ad dolores totam sed blanditiis omnis
   nam veniam rerum qui nemo velit. Qui facilis sint et quia voluptas ea rerum debitis cum explicabo perferendis a 
   eligendi laboriosam. 
  Est odit dicta et illo tempore id reprehenderit error vel molestiae eaque qui amet rerum? `,
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:`Lorem ipsum dolor sit amet. Et repudiandae laborum hic quia galisum qui possimus corrupti sit quibusdam commodi et 
  sint laboriosam nam pariatur fugiat.At corrupti dolores ut amet pariatur ad dolores totam sed blanditiis omnis
   nam veniam rerum qui nemo velit. Qui facilis sint et quia voluptas ea rerum debitis cum explicabo perferendis a 
   eligendi laboriosam. 
  Est odit dicta et illo tempore id reprehenderit error vel molestiae eaque qui amet rerum? `,
}
]

const Home = () => { 
const [user, setUser] =  useState('')

useEffect(() =>{
  setUser('')
})
console.log(user)
return (
    <div>
      <div className='Title'>
        <box className='box'>
      <h1>Hola! BienvenidX</h1>
      {user ? <Link to="/formslide">cambiar titulo</Link> : console.log('not user') }
      </box>
      <div className='text'>
        <span>Lorem ipsum dolor sit amet. Et repudiandae laborum hic quia galisum qui possimus corrupti sit quibusdam commodi et 
          sint laboriosam nam pariatur fugiat. At corrupti dolores ut amet pariatur ad dolores totam sed blanditiis omnis
           nam veniam rerum qui nemo velit. Qui facilis sint et quia voluptas ea rerum debitis cum explicabo perferendis a 
           eligendi laboriosam. 
          Est odit dicta et illo tempore id reprehenderit error vel molestiae eaque qui amet rerum?</span>
      </div>
      </div>
     
     <div>
   <p className='news-head'>
   Últimas noticias
   </p>
   <div className='containernews'>
    {
    news &&
    news.map((e) =>{
      <div >
      <p className="text">{e.text}</p>
      <img src={e.img}  alt= "img news" className="imgnews" />
      </div>
     })}
     </div>
     </div>
     </div>
  );
};

export default Home;
