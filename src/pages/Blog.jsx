import React from 'react';
import "./Blog.css"
import { Link } from 'react-router-dom';

const Blog = ({isHomePage}) => {
  // Sample data for the cards
  const cardsData = [
    { id: 1, title: 'August 1,2023', content: 'GameStop To Offer Up To $1 Billion In', image: 'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-23-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'SPAC Called 5G Edge Wants To Go Public',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-22-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Yoga Event Helping Marginalised Women',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-21-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Dual-Drive Storage For Workflows',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-20-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Trusted High-Capacity Storage',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-13-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Power And Versatility2',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-14-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'WD Blue SATA SSD 2.5” Cased',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-15-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Oxygen Digital Shop Online Purchase',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16-1390x781.jpg' },
    { id: 2, title: 'August 1,2023', content: 'Trusted High-Capacity Storage',image:'https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16-1390x781.jpg' },
    
    // Add more card data...
  ];

  return (
    <div>
      <div className="blogh">Latest-Post</div>
      <div className='flex'>
        {cardsData.slice(0, isHomePage ? 3 : cardsData.length).map(card => (
          <div key={card.id} className="card1" style={{ width: '25%', padding: '10px',gap:'20px' }}>
           <div className="card-background" style={{ backgroundImage: `url(${card.image})`, backgroundSize: '100% 100%', padding: '10px', textAlign: 'center', height: "300px", position: 'relative' }}>
</div>

            <div className="card-content1" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
              <div className="horizontal-line"></div>
              <div className="read">Read More --</div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="center-button">
        <Link to={'/blog'}>
    {isHomePage && (
        
      <button className='load'>
        Load more
      </button>
    )}
    </Link>
  </div>
  
    </div>
  );
}

export default Blog;
