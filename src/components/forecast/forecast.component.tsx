import './forecast.component.scss';

const Forecast: React.FC = () => {
  return (
    <div className="forecast">
      <span className="forecast__navigation">
        Япония &rsaquo; Префектура Токио &rsaquo; Токио
      </span>
      <div className="forecast__today-brief">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          numquam inventore, quo unde reiciendis quibusdam perspiciatis
          dignissimos enim id animi ut doloremque dolor, maxime ea tenetur!
          Minima mollitia necessitatibus quos.
        </span>
      </div>
      <div className="forecast__week-brief">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          numquam inventore, quo unde reiciendis quibusdam perspiciatis
          dignissimos enim id animi ut doloremque dolor, maxime ea tenetur!
        </span>
      </div>
      <div className="forecast__today">
        <div className="forecast__today-current"></div>
        <div className="forecast__today-hourly"></div>
      </div>
      <div className="forecast__location"></div>
      <div className="forecast__week">
        <h2 className="forecast__week-title">Прогноз на 7 дней</h2>
        <ul className="forecast__week-list">
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
          <li className="forecast__week-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
