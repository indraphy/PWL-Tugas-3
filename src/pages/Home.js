import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/ExampleCarouselImage";

const Home = () => {
  const [randomNews, setRandomNews] = useState(null);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd2a5f6510af4547ac25ceef24316f64"
        );

        setRandomNews(response.data.articles[Math.floor(Math.random() * 5)]);
      } catch (error) {
        console.error("Error fetching random news:", error);
      }
    };

    fetchRandomNews();
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage />
        <Carousel.Caption>
          {randomNews && (
            <div>
              <h2>{randomNews.title}</h2>
              <p>{randomNews.description}</p>
              <a
                href={randomNews.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baca selengkapnya
              </a>
            </div>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage />
        <Carousel.Caption>
          {randomNews && (
            <div>
              <h2>{randomNews.title}</h2>
              <p>{randomNews.description}</p>
              <a
                href={randomNews.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baca selengkapnya
              </a>
            </div>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage />
        <Carousel.Caption>
          {randomNews && (
            <div>
              <h2>{randomNews.title}</h2>
              <p>{randomNews.description}</p>
              <a
                href={randomNews.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baca selengkapnya
              </a>
            </div>
          )}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // <div>
    //   <h1>Beranda</h1>
    //   {randomNews && (
    //     <div>
    //       <h2>{randomNews.title}</h2>
    //       <p>{randomNews.description}</p>
    //       <a href={randomNews.url} target="_blank" rel="noopener noreferrer">
    //         Baca selengkapnya
    //       </a>
    //     </div>
    //   )}
    // </div>
  );
};

export default Home;
