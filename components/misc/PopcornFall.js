import Image from "next/image";
import popcorn from "../../public/loadingImage.webp";
import popcorn2 from "../../public/popcornSingle.webp";
const PopcornFall = () => {
    return (
        <>
        <Image
            className="popcornSlow1 absolute -top-12 left-24 opacity-90"
            src={popcorn}
            alt="Popcorn falling down">
        </Image>
        <Image
            className="popcornSlow2 absolute -top-12 right-52"
            src={popcorn2}
            alt="Popcorn falling down">
        </Image>
        {/* <Image
            className="popcornSlow3 absolute -top-24 left-56 opacity-90"
            src={popcorn}
            alt="Popcorn falling down">
        </Image>
        <Image
            className="popcornSlow6 absolute -top-28 right-72"
            src={popcorn2}
            alt="Popcorn falling down">
        </Image> */}
        <Image
            className="popcornSlow4 absolute -top-6 right-8 opacity-90"
            src={popcorn}
            alt="Popcorn falling down">
        </Image>
        <Image
            className="popcornSlow3 absolute -top-80 right-1/2"
            src={popcorn2}
            alt="Popcorn falling down">
        </Image>
        <Image
            className="popcornSlow5 absolute -top-36 right-96 opacity-90"
            src={popcorn2}
            alt="Popcorn falling down">
        </Image>
        {/* <Image
            className="popcornSlow4 absolute -top-8 left-1/3"
            src={popcorn}
            alt="Popcorn falling down">
        </Image> */}
        </>
    )
};

export default PopcornFall