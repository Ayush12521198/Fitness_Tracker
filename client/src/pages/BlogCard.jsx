


import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ id, image, category, title, description, date, readTime }) => {
  return (
    <div className="card-container">
      <div className="card">
        <Link to={`/detail/${id}`} className="card-image-container">
          <img src={image} alt={title} className="card-image" />
          <div className="card-category-overlay">{category}</div>
        </Link>
        <div className="card-content">
          <Link to={`/detail/${id}`} className="card-title-link">
            <h3 className="card-title">{title}</h3>
          </Link>
          <div className="card-meta">
            <div className="card-date">
              <FontAwesomeIcon icon={faCalendarAlt} /> {date}
            </div>
            <div className="card-read-time">
              <FontAwesomeIcon icon={faClock} /> {readTime}
            </div>
          </div>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
