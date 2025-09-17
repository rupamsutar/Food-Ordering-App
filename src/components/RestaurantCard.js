import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    

    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img 
                src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
                className="res-logo"
                alt="res-logo"
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRatingString} ⭐</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}
export default RestaurantCard;