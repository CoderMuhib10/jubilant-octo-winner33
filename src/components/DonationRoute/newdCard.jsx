import { Link } from "react-router-dom";

const newdCard = ({ donating }) => {
  const {
    image,
    title,
    catagory,
    price,
    card_bg_color,
    category_bg_color,
    description,
    category,
    text_button_bg_color,
    id,
  } = donating || {};

  return (
    <>
      <Link to={`/donations/${id}`}>
        <div className=" mb-7 ">
          <div
            className={`card   h-72 active:scale-95 cursor-pointer duration-200 rounded-t-lg`}
            style={{ backgroundColor: card_bg_color }}
          >
            <figure>
              <img src={image} className="rounded-t-lg w-full" />
            </figure>
            <div className="card-body">
              <div
                className="badge rounded-md p-3 font-medium"
                style={{
                  backgroundColor: category_bg_color,
                  color: text_button_bg_color,
                }}
              >
                {category}
              </div>
              <h2 className="card-title " style={{ color: text_button_bg_color }}>{title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default newdCard;
