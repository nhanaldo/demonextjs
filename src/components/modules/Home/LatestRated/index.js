const LatestRated = ({review}) =>{
    return (
        <div>
            <div>
            <span className="font-bold uppercase ml-3  text-[18px] ">
              Mới Đánh Giá
            </span>
            {review.map((itemReview, index) => {
              return (
                <ul key={index} className="p-4 rounded bg-gray-100 m-3">
                  <li className="font-semibold">{itemReview.name}</li>
                  <li className="bg-red-600 p-[1px] text-center w-14 rounded-md text-white">
                    {itemReview.mediumScore}
                  </li>
                  <li className="font-semibold">{itemReview.title}</li>
                </ul>
              );
            })}
          </div>
        </div>
    )
}
export default LatestRated