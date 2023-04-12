const Rating = ({props}) => {

    //Rating is x out of 10, let's convert it to x out of 10
    const roundedRating = Math.round(props);

    switch (roundedRating) {
        case 0:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-white" style={{ "--value": 0 }}><span className="text-white">N/A</span></div>
            )

        case 1:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-red-800" style={{ "--value": 10 }}><span className="text-white">1/10</span></div>
            )

        case 2:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-red-600" style={{ "--value": 20 }}><span className="text-white">2/10</span></div>
            )

        case 3:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-red-600" style={{ "--value": 30 }}><span className="text-white">3/10</span></div>
            )

        case 4:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-orange-500" style={{ "--value": 40 }}><span className="text-white">4/10</span></div>
            )

        case 5:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-orange-500" style={{ "--value": 50 }}><span className="text-white">5/10</span></div>
            )

        case 6:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-yellow-400" style={{ "--value": 60 }}><span className="text-white">6/10</span></div>
            )

        case 7:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-yellow-400" style={{ "--value": 70 }}><span className="text-white">7/10</span></div>
            )

        case 8:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-lime-500" style={{ "--value": 80 }}><span className="text-white">8/10</span></div>
            )

        case 9:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-lime-500" style={{ "--value": 90 }}><span className="text-white">9/10</span></div>
            )

        case 10:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-sky-400" style={{ "--value": 100 }}><span className="text-white">10/10</span></div>
            )

        default:
            return (
                <div className="absolute right-0 top-0 scale-75 bg-black radial-progress text-black" style={{ "--value": 0 }}><span className="text-white">N/A</span></div>
            )
    }
};

export default Rating;