import React from "react";
import "./page.module.css"
function home() {
  return (
    <>
      <section className="featured-wrapper">
        <div className="featured-label">FEATURED POST</div>

        <div className="featured-card">
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200"
              alt="Book"
            />
          </div>

          <div className="featured-content">
            <div className="meta">
              <span>Admin</span>
              <span>Mar 23, 2023</span>
              <span>· 2 min read</span>
            </div>

            <h2>Back to Fiction: What I'm Reading This Summer</h2>

            <p>
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default home;
