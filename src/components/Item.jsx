const Item = ({content}) => {
  return (
    <div className="item d-flex flex-columns align-items-center mb-2">
      <div className="blue-dot"></div>
      <p className="m-0 px-3">{content}</p>
    </div>
  );
};

export default Item;