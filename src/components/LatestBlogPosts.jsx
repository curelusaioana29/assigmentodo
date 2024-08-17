// LatestBlogPosts.js
import React from 'react';


const blogPosts = [
  {
    id: 1,
    date: '2019-07-04',
    month: '07',
    day: '04',
    title: 'Benefits of Async/Await',
    text: 'Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and...',
    image: 'images/post-10-370x307.jpg',
    link: '#',
  },
  {
    id: 2,
    date: '2019-07-17',
    month: '07',
    day: '17',
    title: 'Key Considerations of iPaaS',
    text: 'Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster...',
    image: 'images/post-11-370x307.jpg',
    link: '#',
  },
  {
    id: 3,
    date: '2019-07-22',
    month: '07',
    day: '22',
    title: 'Never Stop Optimizing Your Code',
    text: 'In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...',
    image: 'images/post-12-370x307.jpg',
    link: '#',
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="section section-sm bg-default" id="news">
      <div className="container">
        <h2>Latest blog posts</h2>
        <div className="row row-45">
          {blogPosts.map((post, index) => (
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay={`${index * 0.1}s`}
              key={post.id}
            >
              <article className="post post-modern">
                <a className="post-modern-figure" href={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    width="370"
                    height="307"
                  />
                  <div className="post-modern-time">
                    <time dateTime={post.date}>
                      <span className="post-modern-time-month">
                        {post.month}
                      </span>
                      <span className="post-modern-time-number">
                        {post.day}
                      </span>
                    </time>
                  </div>
                </a>
                <h4 className="post-modern-title">
                  <a href={post.link}>{post.title}</a>
                </h4>
                <p className="post-modern-text">{post.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
