import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDribbble } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer" ><AiFillGithub /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer" ><AiOutlineDribbble /></a>
    </div>
  )
}

export default HeaderSocials