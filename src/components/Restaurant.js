import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../components/Shimmer';
import useResInfo from '../utils/useResInfo';

export const Restaurant = () => {
    const [count, setCount] = useState(0);
    const {id} = useParams();
    const resInfo = useResInfo(id);

    

    
    const { name, locality, labels } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const dishes = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    if ( !resInfo ) {
        return <Shimmer />
    }
    return (
        <div>
            <h1>{name}, {locality}</h1>
            <div>
            </div>
            <h2>Address : { labels && labels[1].message}</h2>
            <ul>
                {dishes?.map((dish) => {
                    const { id, name, price } = dish?.card?.info || {};
                    return <li key={id}>{name}, RS {+price/100}</li>
                })}
            </ul>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click</button>
            <p>{count}</p>
        </div>
    )
}

export default Restaurant;