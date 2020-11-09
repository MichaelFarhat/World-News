import React, { useEffect, useState } from "react";
import "./Category.css";
import { apiKey } from "./someData";
function Category({ lang, category }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function loadData() {
      let country = lang === "en" ? "us" : "de";

      let response = await fetch(
        lang === "ar"
          ? `https://newsapi.org/v2/everything?language=${lang}&q=${
              category === "general" ? "middle%20east" : category
            }&apiKey=${apiKey}
            `
          : `
          https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}
            `
      );
      let data = await response.json();
      console.log(data);
      data.articles = data.articles.sort(function (a, b) {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      setNews(data.articles);
    }
    loadData();
  }, [category]);

  return (
    <div className="category">
      {news.map((e, i) => (
        <a
          href={e.url}
          target="_blank"
          className={`category__news ${i === 0 && "category__news--first"}`}
          key={e.url}
          style={{ backgroundImage: `url(${e.urlToImage})` }}
        >
          <h2 className="category__title">{e.title}</h2>
          <div className="category__body">
            <p className="category__bodyHistory">{e.publishedAt}</p>
            <p className="category__bodyDescription">{e.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Category;
