import React from 'react';
import './FoodPage.css';

const foodItems = [
  {
    name: 'Oats with Fruits',
    image: '/oats with fruits.avif',
    videoLink: 'https://youtu.be/3dyy1SyKwCE?si=XIG9OfI_Jdj-SLiJ'
  },
  {
    name: 'Grilled Vegetables',
    image: '/grilled.jpg',
    videoLink: 'https://youtu.be/CjTPBlW3gMA?si=JMie1JHjlWgseYC_'
  },
  {
    name: 'Green Salad',
    image: '/salad.jpg',
    videoLink: 'https://youtu.be/ln_P2jNCSA0?si=pWiI04WzP267VAFy'
  },
  {
    name: 'Fruit Juice',
    image: '/juice.avif',
    videoLink: 'https://youtube.com/shorts/9jpius7kJOU?si=XgS2isZ3Z96xsidx'
  }
];

const FoodPage = () => {
  return (
    <div className="food-container">
      <div className="food-banner">
        <img src="/chilly.jpg" alt="Food Banner" className="banner-img" />
        <div className="banner-text">
          <h1>Food Recommendations</h1>
          <p>Here are some meals recommended for your health needs.</p>
        </div>
      </div>

      <div className="food-section">
        {foodItems.map((item, index) => (
          <div className="food-card-wrapper" key={index}>
            <div className="food-card">
              <img src={item.image} alt={item.name} className="food-image" />
              <h3>{item.name}</h3>
              <a href={item.videoLink} className="video-link">Watch Video</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;