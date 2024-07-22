// src/FloatingSocialMediaBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FloatingSocialMediaBar = () => {
  const icons = [
    { icon: faFacebook, link: 'https://www.facebook.com/usam.technology/', text: 'Like us!', style: 'top-40' },
    { icon: faWhatsapp, link: 'https://wa.me/9344375567', text: 'Follow us!', style: 'top-48' },
    { icon: faInstagram, link: 'https://www.instagram.com/usam_since_1990/', text: 'Follow us!', style: 'top-56' },
    { icon: faTwitter, link: 'https://x.com/UsamTech', text: 'Follow us!', style: 'top-64' },
    { icon: faYoutube, link: 'https://www.youtube.com/@usamlearning', text: 'Subscribe!', style: 'top-72' },
  ];

  return (
    <div className="fixed xs:hidden sm:hidden right-[-10rem] z-50">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`bg-black text-white flex uppercase tracking-wider py-2 px-2 w-40 fixed right-[-8rem] transition-all duration-200 ease-in-out hover:right-0 ${item.style}`}
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl mr-2 w-5 h-5" />
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
            {item.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingSocialMediaBar;