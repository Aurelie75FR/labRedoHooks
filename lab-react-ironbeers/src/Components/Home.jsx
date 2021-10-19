import React from 'react';
import { Link } from 'react-router-dom';
import beerImg from './../assets/beers.png';
import randomImg from './../assets/random-beer.png';
import newImg from './../assets/new-beer.png';

const Home = () => {
  return (
    <>
      <section className="section-container">
        <img src={beerImg} alt="beer" />
        <Link to="/all">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea
          distinctio. Veritatis fuga dolore earum porro aspernatur! Molestias,
          sit ex velit repellendus laboriosam ratione earum rem magnam mollitia
          impedit eaque laudantium dolorem rerum incidunt, iusto perferendis
          reprehenderit consequatur voluptatem aperiam vero quo blanditiis saepe
          deserunt. Amet iste numquam cupiditate earum vel perspiciatis eos
          sapiente, eveniet totam, vitae facilis in deleniti id est cumque velit
          quasi quod, deserunt aliquid. Consequatur, magnam!
        </p>
      </section>
      <section className="section-container">
        <img src={randomImg} alt="beer" />
        <Link to="/random">Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea
          distinctio. Veritatis fuga dolore earum porro aspernatur! Molestias,
          sit ex velit repellendus laboriosam ratione earum rem magnam mollitia
          impedit eaque laudantium dolorem rerum incidunt, iusto perferendis
          reprehenderit consequatur voluptatem aperiam vero quo blanditiis saepe
          deserunt. Amet iste numquam cupiditate earum vel perspiciatis eos
          sapiente, eveniet totam, vitae facilis in deleniti id est cumque velit
          quasi quod, deserunt aliquid. Consequatur, magnam!
        </p>
      </section>
      <section className="section-container">
        <img src={newImg} alt="beer" />
        <Link to="/beer/create">New Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ea
          distinctio. Veritatis fuga dolore earum porro aspernatur! Molestias,
          sit ex velit repellendus laboriosam ratione earum rem magnam mollitia
          impedit eaque laudantium dolorem rerum incidunt, iusto perferendis
          reprehenderit consequatur voluptatem aperiam vero quo blanditiis saepe
          deserunt. Amet iste numquam cupiditate earum vel perspiciatis eos
          sapiente, eveniet totam, vitae facilis in deleniti id est cumque velit
          quasi quod, deserunt aliquid. Consequatur, magnam!
        </p>
      </section>
    </>
  );
};

export default Home;
