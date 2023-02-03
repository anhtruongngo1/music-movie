import Skeleton from "react-loading-skeleton";
import "./CardSkeletonItem.scss"



function CardSkeletonItem() {
    return ( 
        <div className="card-skeleton">
            <div className="left-col">
                <Skeleton circle width={40} height={40}   />

            </div>
            <div className="right-col">
                <Skeleton count={4} />

            </div>

        </div>
     );
}

export default CardSkeletonItem;