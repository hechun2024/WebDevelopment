const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour-card">
      <span className="tour-img-container">
        <img src={image} className="tour-img"></img>
        <p className="tour-date">{date}</p>
      </span>
      <div className="tour-info">
        <div className="tour-title">
          <h4> {title}</h4>
        </div>
        <p className="tour-info">{info}</p>

        <div className="tour-footer">
          <p>{location}</p>
          <p>{duration} days</p>
          <p>${cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
