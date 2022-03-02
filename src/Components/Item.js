import Location from '../Images/Locate.png';

function Item(props) {
  return (
    <div className="item">
      <img
        className="item-image"
        src={props.item.image}
      ></img>
      <div className="item-details">
        <div className="item-location">
          <img src={Location} className="item-logo"></img>
          <span className="item-country">{props.item.country}</span>
          <span className="item-google">
            <a href={props.item.google}>
              View on Google Maps
            </a>
          </span>
        </div>
        <p className="item-title">{props.item.title}</p>
        <p className="item-date">{props.item.date}</p>
        <p className="item-info">{props.item.info}</p>
      </div>
    </div>
  );
}
export default Item;
