import React, { useState } from 'react';
import '../css/Body.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTelegram, faTiktok } from "@fortawesome/free-brands-svg-icons";


function MainContent() {
  return (
    <div className="main-content-container">
      <div className="main-article">
        <div className="main-article-content">
          <div className="category">SOFTWARE</div>
          <h1>𝑨𝒍𝒚𝒂𝒉 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑺𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔!</h1>
          <div className="article-meta">
            <span className="author">Henok Alelgn</span>
            <span className="date">July 7, 2021</span>
            <span className="comments">No Comments</span>
          </div>
          <p>
          🌟 Introducing Alyah Software: Empowering Innovation, Elevating Businesses! 🌟
          👋 Hey there, tech enthusiasts and business moguls! Allow us to introduce ourselves - we're Alyah Software, your go-to destination for cutting-edge software solutions tailored to elevate your business to new heights! 🚀...
          </p>
        </div>
      </div>
      <div className="article-container">
      <div className="image-container">
        <img 
          src="https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/449753884_857886839735333_3345362683083888346_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=d4fFzD0XPUsQ7kNvgGrBKjt&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=Azx6K4rw30-XA05-zDVfK4I&oh=00_AYDAe0B2o08UEVo798Xy3jMbqVwXs7LCY6fi4-JrXXW61g&oe=670DB8A0" 
          alt="Alyah software Logo" 
          className="image" 
        />
      </div>
      <div className="text-container">
        <h2 className="category">APPS</h2>
        <p className="article-title">We Design and develop different Apps...</p>

        <h2 className="category">GAMES</h2>
        <p className="article-title">Software installation and maintenance Games...</p>

        <h2 className="category">WEBSITES</h2>
        <p className="article-title">Prepare business Websites and proposal...</p>

        <h2 className="category">PROJECTS</h2>
        <p className="article-title">Develop and consult graduation projects...</p>
      </div>
    </div>
    </div>
  );
}
//TechREviews
const TechReviews = () => {
  return (
    <div className="tech-reviews-container">
      <div className="reviews-section">
      <div className="reviews-header">
    <h2>Tech Reviews</h2>
    <a href="#" className="more-link">More in Tech Reviews →</a>
  </div>
        <div className="review-card">
          <div className="review-row">
            <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg" alt="iPad Pro" className="review-image" />
            <div className="review-text">
              <h3 className="category">APPS</h3>
              <h4 className="review-title">Develop Android Application</h4>
              <p className="review-description">
              ⚡⚡ Dive into seamless user experiences, real-time updates, and accessibility across devices. Say goodbye to clunky software and hello to innovation!...
              </p>
              <span className="review-author">Hiwot  | July 7, 2021</span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-row">
            <img src="https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/449463538_853940863463264_7075279089478941714_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wi5baxa4YRYQ7kNvgFWH0gi&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=A5WxnKU64a-Qazsbq8ymkai&oh=00_AYAX9XJGw3Ts7B98EpRzklWC8jqfpSJFzHqS_LrYQgY6DA&oe=670DBDD2" alt="Dell XPS" className="review-image" />
            <div className="review-text">
              <h3 className="category">Freelance</h3>
              <h4 className="review-title">Azop Freelance Software</h4>
              <p className="review-description">
              ⚡⚡Whether you're a freelancer looking for your next gig or a business in need of top talent, Azop is here to connect you. Explore opportunities, showcase your skills, and grow your career with us!...
              </p>
              <span className="review-author">Henok | July 7, 2023</span>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-row">
            <img src="https://imgs.search.brave.com/lQlRsLEcenn7sYeRuYn2KSfeyhueA2s24_o952-wEGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymx1ZW1hbnRpcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDgvZW50ZXJw/cmlzZS10ZWNoLW1n/bXQtY29zdHMtODY0/eDQ4Ni5qcGc" alt="Dell XPS" className="review-image" />
            <div className="review-text">
              <h3 className="category">Digital Transformation</h3>
              <h4 className="review-title">Transforming Digital business operations</h4>
              <p className="review-description">
              ⚡⚡Our latest post discusses how system integration is transforming business operations. Join the conversation and discover how our solutions can help organizations thrive in the digital age. ...
              </p>
              <span className="review-author">Habtamu | July 7, 2021</span>
            </div>
          </div>
        </div>

       
      </div>

      <div className="sidebar">
        <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-promo-potrait-banner-img.jpg" alt="" />
        <div className="stay-connected">
      <h2>Stay Connected</h2>
      <ul className="social-list">
        <li className="social-item">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <div className="social-text">
            <span className="social-name">Alyah Software</span>
            <span className="follower-count">2k Followers</span>
          </div>
        </li>
        <li className="social-item">
        <FontAwesomeIcon icon={faTelegram} className="social-icon" />
          <div className="social-text">
            <span className="social-name">Alyah Apps</span>
            <span className="follower-count">200 Followers</span>
          </div>
        </li>
        <li className="social-item">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          <div className="social-text">
            <span className="social-name">Alyah Software</span>
            <span className="follower-count">400 connections</span>
          </div>
        </li>
        <li className="social-item">
        <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          <div className="social-text">
            <span className="social-name">@alyahsoftware</span>
            <span className="follower-count">1k Subscribers</span>
          </div>
        </li>
      </ul>
    </div>
      
      </div>
    </div>
  );
}





// EditorsPick
function EditorsPick() {
  const handleSubscribe = () => {
    window.location.href = 'https://aezope.com/';
  };

  return (
    <div className="editors-pick-container">
      <div className="editors-pick-header">
        <h2>Editor's Pick</h2>
        <a href="#" className="view-all">
          View All &rarr;
        </a>
      </div>
      <div className="editors-pick-content">
        <div className="editor-card">
          <img
            src="https://imgs.search.brave.com/YvLVEMg9oHOhadWCUH_KCJvrkFZVEJKUAjEeQ12g_Pw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViLzUz/L2h1YmZzL2Zvcm1z/LXRlc3RpbmctMS5q/cGc_d2lkdGg9NTk1/JmhlaWdodD00MDAm/bmFtZT1mb3Jtcy10/ZXN0aW5nLTEuanBn"
            alt="For Families of Teens at Microsoft Surface"
          />
          <div className="card-label">Test Your Web Forms</div>
          <h3> 📝 Ensure the functionality and usability of your web forms by thoroughly testing them before deployment. Test for validation errors, accessibility, and responsiveness across different browsers and devices to provide a seamless user experience.</h3>
        </div>
        <div className="editor-card">
          <img
            src="https://imgs.search.brave.com/ZUTWVkEeJK4Q9A7xbp-O9ZzyTp7nWDgm04p4jWCLqeY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3BpY2V3b3Jr/cy5jb20vNDAweDIw/MC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wOS8xNjEyMjky/NC9BLXBhaXItb2Yt/ZGVzaWduZXJzLXdv/cmtpbmctb24tYS1D/QUQtYXNzaWdubWVu/dC5qcGc"
            alt="software"
          />
          <div className="card-label">Software</div>
          <h3>🔐 Protect sensitive data and prevent cyber threats by regularly updating your system's security measures. Install firewalls, use encryption protocols, and conduct security audits to identify and address vulnerabilities</h3>
        </div>
        <div className="editor-card">
          <img
            src="https://imgs.search.brave.com/NaNI3NJQF_RpliOSy3mT4Xm2CwTe_AQ6GAARFPHTH_s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcHBk/ZXZlbG9wbWVudG5p/bmphcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMTAv/QmxhY2stb3duZWQt/YXBwLWRldmVsb3Bt/ZW50LWNvbXBhbmll/cy5qcGc"
            alt="6 Bots That Deliver Science and Serendipity on Twitter"
          />
          <div className="card-label">APPS</div>
          <h3>📲 Safeguard your important data and app settings by backing up your Android applications regularly</h3>
        </div>
        <div id='signin' className="subscribe-card">
          <h3>Subscribe to Our Freelance</h3>
          <p>Join now Alyah software Freelance.</p>
          <input type="email" placeholder="Email address" />
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
//Techwire component
function TechWirePodcast() {
  const [isOpen, setIsOpen] = useState(false);

  const handleListenNowClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="techw-container">
      <div className="tech-image-container">
        <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/teh-news-podcast-cta-figure-img.png" alt="TechWire Podcast" />
      </div>
      <div id='podcast' className="tech-content-container">
        <div className="content-row">
          <div className="content-column">
            <h1 className="blue-title">Alyah Software Podcast</h1>
            <h2>Listen to daily tech tips, and discover innovative ways to leverage Alyah software!</h2>
            <p>Subscribe now on your favorite podcast platform and never miss an episode!</p>
          </div>
          <button className="listen-now-btn" onClick={handleListenNowClick}>Watch Now</button>
        </div>
      </div>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={handleClosePopup}>&times;</span>
            <h2>Watch the Podcast</h2>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=B9b7ZYd_VxM" 
                title="Alyah Software Podcast"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// MustRead Component
function MustRead () {
  return (
    <div className="read-container">
      <div className="read-header">
        <h2>MustRead </h2>
        <a href="#" className="more-in-read">
          View All
        </a>
      </div>
      <div className="read-card-container">
        <div className="read-card">
          <div className="read-card-bg" style={{backgroundImage: `url(https://img.freepik.com/premium-photo/business-people-using-ai-technology-digital-transformation-change-management-internet-things_935552-6400.jpg)`}}>
            <div className="read-info">
              <p>GADGET</p>
              <h2>Real-Time Collaboration</h2>
              <p>Work together seamlessly with team members through integrated chat and file-sharing capabilities....</p>
            </div>
          </div>
        </div>
        <div className="read-card">
          <div className="read-card-bg" style={{backgroundImage: `url(https://cdn.sanity.io/images/hgftikht/production/15e59305a8a390ca6395fd6f62f922c4f8162aa5-1400x600.png)`}}>
            <div className="read-info">
            <p>MUST READ</p>
              <h2>User-Centric Design</h2>
              <p>Designs that consider users with disabilities, ensuring that websites are navigable and usable for everyone, including those with visual or motor impairments.
              ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// TechCard Component
const TechCard = ({ image, title, description, author, date }) => {
  return (
    <div  className="tech-card">
      <div className="tech-image">
        <img src={image} alt={title} />
      </div>
      <div className="tech-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-details">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

// Technology Component
const Technology = () => {
  const tech = [
    {
      image: 'https://imgs.search.brave.com/tE3M9W5OyMy1Jshi2YPrXNkq03NcyvW0mVhbNJjNV7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icG1h/cHAuY29tL2ltYWdl/cy9ibG9nL3dvcmtm/bG93LW1hbmFnZW1l/bnQtc29mdHdhcmUu/cG5nP3Y9MTY2MTQy/ODY1NDQ1MTc2ODgz/MQ',
      title: '💼 Simplify Your Workflow',
      description: ' Automated processes save you time and reduce errors and perfect for professionals looking to optimize their daily routines and achieve their goals more efficiently. Experience the difference today! ...',
      author: 'Nati',
      date: 'July 5, 2021',
    },
    {
      image: 'https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-28.jpg',
      title: '🚀 Boost Efficiency',
      description: 'Accelerate task completion with smart technology. reduce time wastage, and achieve your objectives faster. Start optimizing your operations today! ...',
      author: 'Adugna',
      date: 'July 5, 2023',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAMATbNv36vwrgFVi2CA4RRfgLEizA2Lstkx4eKqCD_2qoLpys7LcuMd_M3_pxBtvdpg&usqp=CAU',
      title: '📊 Real-Time Insights',
      description: 'Make informed decisions with up-to-the-minute data and adapt to changes on the fly, and stay ahead of the competition. Elevate your strategy and drive success today! ...',
      author: 'Mengistu',
      date: 'July 5, 2024',
    },
  ];

  return (
    <div id='technology' className="tech-container">
      <div className="tech-header">
        <h2>Technology</h2>
        <a href="#" className="more-in-tech">
          More in Technology
        </a>
      </div>
      <div className="tech-card-container">
        {tech.map((techItem, index) => (
          <TechCard
            key={index}
            image={techItem.image}
            title={techItem.title}
            description={techItem.description}
            author={techItem.author}
            date={techItem.date}
          />
        ))}
      </div>
    </div>
  );
};
const Articles = () => {
  const articles = [
    {
      category: 'Gadgets',
      title: 'Azopfreelancemarket',
      author: 'Abdu',
      date: 'July 7, 2021',
      comments: 'No comments',
      image: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/451830969_865496178974399_1884653226514265233_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JKuW20wf134Q7kNvgETJgh3&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=Asa64k-MHF6Kq4Uf38A7EBw&oh=00_AYDhiA8qLqWSb7cjmQk6vlmriOuziwJzXYJa2gQDE-7msw&oe=670DB2CA',
      description: '⚡⚡Whether you\'re a freelancer looking for your next gig or a business in need of top talent, Azop is here to connect you. Explore opportunities, showcase your skills, and grow your career with us!..',
    },
    {
      category: 'Software',
      title: '🌟Introducing Alyah Software: Empowering Innovation, Elevating Businesses! 🌟',
      author: 'Naol',
      date: 'July 7, 2021',
      comments: 'No comments',
      image: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/443713348_826325816224769_7446675886538303230_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=KwumgnitQ7cQ7kNvgEdqlmg&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=A3qO5x3MBQndzsVp9tO26J6&oh=00_AYDFgK2cg37AXBR8vM-u5lmBYfs68A1uIOmDHXdmf-I9Cw&oe=670DB4FA',
      description: '👋 Hey there, tech enthusiasts and business moguls! Allow us to introduce ourselves - we\'re Alyah Software, your go-to destination for cutting-edge software solutions tailored to elevate your business to new heights! 🚀...',
    },
  ];

  return (
    <div className="articles-container">
      <div className="category-section">
      <div className="category-header">
          <h2 id='gadget' className="category-title">Gadgets</h2>
          <a href="#" className="more-link">More in Gadgets →</a>
        </div>
        {articles.filter(article => article.category === 'Gadgets').map((article) => (
          <div className="article-card" key={article.title}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h4 className="article-title">{article.title}</h4>
            <span className="article-meta">
              {article.author} | {article.date} | {article.comments}
            </span>
            <p className="article-description">{article.description}</p>
          </div>
        ))}
      
      </div>

      <div className="category-section">
      <div className="category-header">
          <h2 id='software' className="category-title">Software</h2>
          <a href="#" className="more-link">More in Software →</a>
        </div>
        {articles.filter(article => article.category === 'Software').map((article) => (
          <div className="article-card" key={article.title}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h4 className="article-title">{article.title}</h4>
            <span className="article-meta">
              {article.author} | {article.date} | {article.comments}
            </span>
            <p className="article-description">{article.description}</p>
          </div>
        ))}
       
      </div>
    </div>
  );
};

// Games Component
function Games() {
  return (
    <div id='games' className="games-container">
      <div className="games-header">
        <h2>Games</h2>
        <a href="#" className="more-in-games">
          More in Games
        </a>
      </div>
      <div className="game-card-container">
        <div className="game-card">
          <div className="game-card-bg" style={{backgroundImage: `url(https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-06.jpg)`}}>
            <div className="game-info">
              <h2>Ethiopian Quest: The Lost Kingdom</h2>
              <p>Join a brave hero on a journey through the diverse landscapes of Ethiopia, from the Simien Mountains to the Danakil Depression. Players will solve ancient puzzles, engage in strategic battles, and uncover the secrets of a long-lost kingdom ...</p>
            </div>
          </div>
        </div>
        <div className="game-card">
          <div className="game-card-bg" style={{backgroundImage: `url(https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-16.jpg)`}}>
            <div className="game-info">
              <h2>Axum's Legacy</h2>
              <p>With engaging gameplay and a focus on historical events, Axum's Legacy brings the rich culture and history of Ethiopia to life....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AppCard Component
function AppCard({ image, title, description, author, date }) {
  return (
    <div id='apps' className="app-card">
      <div className="app-image">
        <img src={image} alt={title} />
      </div>
      <div className="app-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="app-details">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

// Apps Component
function Apps() {
  const apps = [
    {
      image: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/442415876_830306715826679_3735754638015168247_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BD7PQR2GJuIQ7kNvgEFFivl&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=A-X23RP6K35Ht-VfiW85ld_&oh=00_AYCzeq-j3Oxl6kzezTTCrvM6-0CD6wIH0eL1iVijLLnozQ&oe=670DD829',
      title: 'Student Information Management System',
      description: 'Empower your institution with Alyah Software Student Information Management System ...',
      author: 'Fahim',
      date: 'July 5, 2022',
    },
    {
      image: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/441952005_827501422773875_8805830114453133135_n.jpg?stp=c181.0.720.720a_dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=BzjpBjXFFegQ7kNvgGkvB1z&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=AL3fXwmy1EnvCrWxGuL8BCq&oh=00_AYDSGbytL7plO3xLerT-j_rLMGHqhRS8t1Ar8TrvvikIjg&oe=670DC054',
      title: 'Alyah Software\'s Digital Library',
      description: 'A visually appealing collage of book covers, e-books, and research papers available in the Digital Library ...',
      author: 'Nahom',
      date: 'July 25, 2023',
    },
    {
      image: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/436336892_827036926153658_654428127719658428_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rxkUaoRpYyoQ7kNvgEXIGbm&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=AWnIDIQUwGjdDJdhKGouTJB&oh=00_AYD-zwxIFASZtBbxxgrQov_YhlLE2P6WYAtvxVYmvE-7Ww&oe=670DA909',
      title: 'Alyah Software Super GC App',
      description: 'Celebrating milestones, one digital magazine at a time! Our GC App has helped countless institutions create unforgettable graduation experiences ...',
      author: 'Henok',
      date: 'July 5, 2024',
    },
  ];

  return (
    <div id='apps' className="apps-container">
      <div className="apps-header">
        <h2>Apps</h2>
        <a href="#" className="more-in-apps">
          More in Apps
        </a>
      </div>
      <div className="app-card-container">
        {apps.map((app, index) => (
          <AppCard
            key={index}
            image={app.image}
            title={app.title}
            description={app.description}
            author={app.author}
            date={app.date}
          />
        ))}
      </div>
    </div>
  );
}

// Body Component
function Body() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.success);
        setEmail('');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <MainContent/>
      <TechReviews/>
      <EditorsPick/>
      <TechWirePodcast/>
      <MustRead/>{}
      <Technology/>{}
      <Articles/>{}
      <Games /> {}
      <Apps /> {}
      <div className="newsletter-container">
        <div className="newsletter-content-wrapper">
          <div className="newsletter-content">
            <h2>Sign up for Alyah Software Newsletter</h2>
            <p>comment and suggestion for our service.</p>
          </div>
          <div id='subscribe' className="newsletter-form-container">
            <form onSubmit={handleSubmit}>
            <input
  type="email"
  name="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  placeholder="Email address"
  required
  className="custom-input"
/>
              <button type="submit" class="subscribe-button">
                Subscribe
              </button>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              {success && <div style={{ color: 'black' }}>{success}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;