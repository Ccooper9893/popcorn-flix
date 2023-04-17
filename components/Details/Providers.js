const Providers = ({ provider }) => {
    return (
        <div className="w-3/5 mx-auto">
            <div tabIndex={0} className="collapse shadow shadow-stone-800">
                <div className="collapse-title px-0">
                    Stream
                </div>
                <div className="collapse-content transition-transform">
                    <div tabIndex={0}>
                        <ul>
                            {provider?.flatrate ? (
                                <div>
                            {provider.flatrate.map((service) => {
                                return (
                                    <l1 key={provider.id}>{service?.provider_name}, </l1>
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
                <div className="collapse-content transition-transform">
                <ul>
                            {provider?.rent ? (
                                <div>
                            {provider.rent.map((service) => {
                                return (
                                    <l1 key={provider.id}>{service?.provider_name}, </l1>
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
                <div className="collapse-content transition-transform">
                <ul>
                            {provider?.buy ? (
                                <div>
                            {provider.buy.map((service) => {
                                return (
                                    <l1 key={provider.id}>{service?.provider_name}, </l1>
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