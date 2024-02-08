import React from 'react';
import { TeamInfo } from '@/constants/index';
import Image from 'next/image';
import './TeamCard.css'

interface TeamCategoryCardProps {
  teamCategoryInfo: TeamInfo;
}

const TeamCard: React.FC<TeamCategoryCardProps> = ({ teamCategoryInfo }) => {
  return (
    <div className="TeamCategoryCardContainer">
      <div>
        <Image src={teamCategoryInfo.icon} width={50} height={50} className="team-image" alt={teamCategoryInfo.name} />
      </div>
      <div className='text-container'>
        <h3 className='team-title'>{teamCategoryInfo.name}</h3>
        <p className='md:team-title team-description text-#525252'>{teamCategoryInfo.description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
