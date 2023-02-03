import Skeleton from "react-loading-skeleton";
import "./CardSkeleton.scss"



function CardSkeleton() {
    return ( 
        <div className="card-skeleton">
            <div className="left-col">
                <Skeleton circle width={40} height={40}   />

            </div>
            <div className="right-col">
                <Skeleton count={15} />

            </div>

        </div>
     );
}

export default CardSkeleton;