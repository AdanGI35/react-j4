import React from "react";
import "./Blog.css";

const Blog = ({ posts, switchToPost }) => { //const pour changer de page
  return (
    <>
      <h1>Le blog</h1>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <article className="items">
              <header>
                <figure>
                  <img src={post.image}alt="image aléatoire de démonstration"/>
                </figure>
                <h2>{post.title}</h2>
              </header>
              <section>
     
              </section>
              <footer>
                <button onClick={() => switchToPost(post)}> Lire l'article</button>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;