


import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';




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
    content: 'Since our post on The Best Fitness Trackers For Women, we have been busy compiling a list just for the boys!',
  },
  {
    id: '1',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2015/10/92.jpg',
    category: 'FOOD',
    title: 'The Best Super Foods A-Z: B Is For ',
    description: 'This nutty, filling and hearty seed has been hailed as a  ',
    date: '28 Jun',
    readTime: '2 minute read',
  },
  {
    id: '2',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2016/03/199.jpg',
    category: 'FOOD',
    title: 'What To Eat After a Workout In 2022 ',
    description: 'The Spring has come to town',
    date: '28 Jun',
    readTime: '3 minute read',
  },
  {
    id: '3',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2021/08/602.jpg',
    category: 'FOOD',
    title: 'The Best Super Foods A-Z: B Is For Buckwheat',
    description: 'This nutty, filling and hearty seed has been hailed as a  ',
    date: '28 Jun',
    readTime: '2 minute read',
  },
  {
    id: '4',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2021/05/598.jpg',
    category: 'FOOD',
    title: 'The Best Super Foods A-Z: B Is For Buckwheat',
    description: 'This nutty, filling and hearty seed has been hailed as a  ',
    date: '28 Jun',
    readTime: '2 minute read',
  },
  {
    id: '5',
    image: 'https://www.inkin.com/blog/thumbs/750x430/media/2020/04/519.jpg',
    category: 'FOOD',
    title: 'The Best Super Foods A-Z: B Is For Buckwheat',
    description: 'This nutty, filling and hearty seed has been hailed as a  ',
    date: '28 Jun',
    readTime: '2 minute read',
  }
];
const BlogList = () => {
  return (
    <div className="box">
      <h1>Welcome To 
      Fitness & Health Blog </h1>
      <div className="card-container">
        {cardsData.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
