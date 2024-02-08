import React from 'react';
import { TestimonalInfo } from '@/constants';
import Image from 'next/image';
import './Testimonial.css'

const TestimonialCard: React.FC<{ testimonalInfo: TestimonalInfo }> = ({ testimonalInfo }) => {
  return (
    <div className="TestimonalCardContainer">
      <div className="icon-container">
        <p className="stars">{testimonalInfo.stars}</p>
      </div>
      <div className="text-xl text-container">
        <h3 className="review-title">{testimonalInfo.review}</h3>
        <p className="review-description">{testimonalInfo.description}</p>
      </div>
      <hr className="divider" />
      <div className="company-section">
        <Image src={testimonalInfo.company} width={50} height={50} alt="Company Logo" className="company-logo" />
        <div className="company-info">
          <h3 className="company-name">{testimonalInfo.name}</h3>
          <p className="role">{testimonalInfo.role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
