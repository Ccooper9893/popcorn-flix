const Rating = ({props}) => {

    //Rating is x out of 10, let's convert it to x out of 10
    const roundedRating = Math.round(props);
    const percentageRating = Math.round(props*10);

    switch (roundedRating) {
        case 0:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-white text-lg" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}</span></div>
            )

        case 1:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-red-800" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 2:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-red-600" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 3:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-red-600" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 4:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-orange-500" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 5:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-orange-500" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 6:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-yellow-400" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 7:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-yellow-400" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 8:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-lime-500" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 9:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-lime-500" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}%</span></div>
            )

        case 10:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-sky-400" style={{ "--value": percentageRating }}><span className="text-white text-lg">{percentageRating}</span></div>
            )

        default:
            return (
                <div className="absolute -right-2 -top-2 scale-50 bg-black radial-progress text-black" style={{ "--value": 0 }}><span className="text-white text-lg">N/A</span></div>
            )
    }
};

export default Rating;