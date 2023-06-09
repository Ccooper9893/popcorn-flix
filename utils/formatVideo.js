const formatVideo = (mobileDimensions, desktopDimensions, autoplay) => {

    // https://developers.google.com/youtube/player_parameters
    const opts = {
        playerVars: {
            autoplay,
            origin: `http://localhost:3000`
        },
        height: desktopDimensions.height,
        width: desktopDimensions.width,
    };

    if (typeof window !== 'undefined') {

        // Use a media query to detect desktop devices and adjust the dimensions
        const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
        
        // Merge the options with the appropriate dimensions based on the device
        if (desktopMediaQuery.matches) {
            opts.height = desktopDimensions.height;
            opts.width = desktopDimensions.width;
        } else {
            opts.height = mobileDimensions.height;
            opts.width = mobileDimensions.width;
        };

    } else {
        // Fallback to mobile dimensions if the `window` object is not available
        opts.height = mobileDimensions.height;
        opts.width = mobileDimensions.width;
    };

    return opts;
};

export default formatVideo;