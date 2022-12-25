import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one amd only solution to the tech problems you faceevery
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quibusdam quia doloribus similique unde voluptate rem doloremque,
            quas nemo? Distinctio corrupti est quas vero dignissimos ducimus, et
            blanditiis veritatis nisi doloribus, explicabo sequi ipsa fuga eum
            pariatur dolorum. Quas officiis sapiente, libero fugit possimus
            adipisci. Cumque ipsa ducimus amet, dolores, molestias assumenda eum
            voluptate quo consectetur laudantium optio tenetur at magnam ad
            deserunt quaerat architecto sunt, qui facere nihil? Harum dolores
            dolore optio molestias explicabo asperiores in adipisci minima, nam
            sapiente eos neque reprehenderit, quisquam repellat. Aspernatur
            repellendus nostrum consequuntur, eius facilis placeat asperiores
            minus? Dolores quaerat odio quod reiciendis error voluptatem
            cupiditate obcaecati soluta. Ius
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h2>Brands</h2>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;