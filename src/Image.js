function Image(props) {
  return (
    <div className="card-pic">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Image;