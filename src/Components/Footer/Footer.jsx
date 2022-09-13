import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import FooterContainer, { SocialLink } from './styledFooter';
import { footerLinks, footerSocials } from './footerLinks';

const Footer = () => {
  const locate = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(locate.pathname);
  }, [locate]);

  return (
    <FooterContainer>
      <div className="footer-top">
        <div></div>
        <div className="footer-top-image">
          <img
            src="https://res.cloudinary.com/dwtkwakbc/image/upload/v1660770518/LOGO-SOMOS_MAS_uyr5wi.png"
            width="100"
            height="100"
            alt="logo"
            className="footer-logo"
          />
        </div>
        <div></div>
      </div>
      <div className="footer-middle">
        {footerLinks.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-social-links">
          {footerSocials.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              rel="noreferrer"
            >
              <SocialLink
                className={`bi ${social.icon}`}
                key={social.id}
                color={social.color}
              ></SocialLink>
            </a>
          ))}
        </div>
        <div className="footer-copyright">
          2022 by Alkemy. All Rights Reserved.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
