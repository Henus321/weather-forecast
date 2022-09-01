import { FaCloudMoonRain } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa';

import './footer.component.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__item">
          <h2 className="footer__title">Weather Forecast</h2>
          <span>Developed by Alexandr Erkhov</span>
        </div>
        <div className="footer__item">
          <FaCloudMoonRain className="footer__icon footer__title" />
          <span>Based on Open-Meteo API</span>
        </div>
        <div className="footer__item">
          <div className="footer__social-media footer__title">
            <FaGithub className="footer__social-media-item" />
            <FaYoutube className="footer__social-media-item" />
            <FaVk className="footer__social-media-item" />
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
