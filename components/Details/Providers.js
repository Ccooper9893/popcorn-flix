import Image from "next/image";

const Providers = ({ provider }) => {
    return (
        <div className="w-3/5 mx-auto">
            <div tabIndex={0} className="collapse shadow shadow-stone-800">
                <div className="collapse-title px-0">
                    Stream
                </div>
                <div className="transition-transform">
                    <div tabIndex={0}>
                        <ul>
                            {provider?.flatrate ? (
                                <div className="flex flex-row flex-wrap justify-center gap-2 mb-3">
                                    {provider.flatrate.map((service) => {
                                        return (
                                            <Image
                                            className=" rounded-full"
                                            key={service.provider_id}
                                            src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                                            width={60}
                                            height={60}
                                            alt="Movie Poster"
                                            loading="eager"
                                        >
                                        </Image>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p>Currently unavailable for streaming.</p>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
            <div tabIndex={1} className="collapse shadow shadow-stone-800">
                <div className="collapse-title px-0">
                    Rent
                </div>
                <div className="transition-transform">
                    <ul>
                        {provider?.rent ? (
                            <div className="flex flex-row flex-wrap justify-center gap-2 mb-3">
                                {provider.rent.map((service) => {
                                    return (
                                        <Image
                                        className=" rounded-full"
                                            key={service.provider_id}
                                            src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                                            width={60}
                                            height={60}
                                            alt="Movie Poster"
                                            loading="eager"
                                        >
                                        </Image>
                                    )
                                })}
                            </div>
                        ) : (
                            <p>Currently unavailable for renting.</p>
                        )}

                    </ul>
                </div>
            </div>
            <div tabIndex={2} className="collapse shadow shadow-stone-800">
                <div className="collapse-title px-0">
                    Buy
                </div>
                <div className="transition-transform">
                    <ul>
                        {provider?.buy ? (
                            <div className="flex flex-row flex-wrap justify-center gap-2 mb-3">
                                {provider.buy.map((service) => {
                                    return (
                                        <Image
                                        className=" rounded-full"
                                        key={service.provider_id}
                                        src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                                        width={60}
                                        height={60}
                                        alt="Movie Poster"
                                        loading="eager"
                                    >
                                    </Image>
                                    )
                                })}
                            </div>
                        ) : (
                            <p>Currently unavailable for buying.</p>
                        )}

                    </ul>
                </div>
            </div>
        </div>

    )
};

export default Providers;