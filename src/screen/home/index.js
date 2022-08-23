import { Link } from 'react-router-dom';
import './Home.css'
import { useState, useEffect } from 'react';
import Slider from '../../Components/Slider/Slider';
import  NewsCard from './Newscard'
const slides = [
  {
    id: 1,
    title: 'Slide 1',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 2,
    title: 'Slide 2',
    image:
      'https://images.unsplash.com/photo-1657299143333-4a56a5519651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
  },
  {
    id: 3,
    title: 'Slide 3',
    image:
      'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];
const news = [
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer'
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
},
{
  img:'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg',
  text:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
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
      </box>
      </div>
      <div>
      <Slider slides={slides} classes={["w-50"]} />
      </div>
     <div>
   <p className='news-head'>
   Últimas noticias
   </p>
   <div className='containernews'>
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
     </div>
     </div>
)
};

export default Home;
