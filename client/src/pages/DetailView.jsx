
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const cardsData = [
  {
    id: '0',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/324.jpg',
    category: 'WEARABLES',
    title: 'The Best Fitness Trackers For Men',
    description: 'C’mon, you didn’t think we had forgotten about you, did you?',
    date: '29 Jun',
    readTime: '3 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  },
  {
    id: '1',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/325.jpg',
    category: 'FOOD',
    title: 'The Best Super Foods A-Z: B Is For Buckwheat',
    description: 'This nutty, filling and hearty seed has been hailed as a “Health Powerhouse” – so if you’re not already obsessed– it’s time to be!',
    date: '28 Jun',
    readTime: '2 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  },
  {
    id: '2',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/326.jpg',
    category: 'FOOD',
    title: 'What To Eat After a Workout In 2022 [INFOGRAPHICS]',
    description: 'The Spring has come to town, which means it\'s the perfect time to welcome a new, healthier version of yourself...',
    date: '28 Jun',
    readTime: '3 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  } ,
  {
    id: '3',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/326.jpg',
    category: 'FOOD',
    title: 'What To Eat After a Workout In 2022 [INFOGRAPHICS]',
    description: 'The Spring has come to town, which means it\'s the perfect time to welcome a new, healthier version of yourself...',
    date: '28 Jun',
    readTime: '3 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  },
  {
    id: '4',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/326.jpg',
    category: 'FOOD',
    title: 'What To Eat After a Workout In 2022 [INFOGRAPHICS]',
    description: 'The Spring has come to town, which means it\'s the perfect time to welcome a new, healthier version of yourself...',
    date: '28 Jun',
    readTime: '3 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  },
  {
    id: '5',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2017/02/326.jpg',
    category: 'FOOD',
    title: 'What To Eat After a Workout In 2022 [INFOGRAPHICS]',
    description: 'The Spring has come to town, which means it\'s the perfect time to welcome a new, healthier version of yourself...',
    date: '28 Jun',
    readTime: '3 minute read',
    author: 'Zara',
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!'
  }
];

const DetailView = () => {
  const { id } = useParams();
  const card = cardsData.find((card) => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
  <div className="box">
    <div className="detail-view">
      <img src={card.image} alt={card.title} className="detail-image" />
      <div className="detail-category">{card.category}</div>
      <div className="detail-content">
        <h1>{card.title}</h1>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> {card.date}
          &nbsp;&nbsp;&nbsp; {/* Adds space between date and time */}
          <FontAwesomeIcon icon={faClock} /> {card.readTime}
        </p>
        <p>By {card.author}</p>
        <p>{card.content}</p>
      </div>
    </div>
    </div>
   
  );
};

export default DetailView;
