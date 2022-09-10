import React from 'react';

import { FaCloudMoonRain } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa';

import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__item">
          <h2 className="footer__title">Weather Forecast</h2>
          <span>Developed by Alexandr Erkhov</span>
        </div>
        <div className="footer__item">
          <a
            href="https://open-meteo.com/en/docs"
            rel="noreferrer"
            target="_blank"
          >
            <FaCloudMoonRain className="footer__icon footer__title" />
          </a>
          <span>Based on Open-Meteo API</span>
        </div>
        <div className="footer__item">
          <div className="footer__social-media footer__title">
            <a
              href="https://github.com/Henus321"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className="footer__social-media-item" />
            </a>
            <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
              <FaYoutube className="footer__social-media-item" />
            </a>
            <a href="https://vk.com/" rel="noreferrer" target="_blank">
              <FaVk className="footer__social-media-item" />
            </a>
          </div>
          <span>Support: tyrantbud@yandex.ru</span>
        </div>
        <span className="footer__copyright">
          2022 © all rights not reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
