import React from "react";

export function View() {
    return(
        <>
            <div className="view-main">
            {/* <!-- this is hls video stream vod --> */}
                <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    width="640"
                    height="264"
                    poster="MY_VIDEO_POSTER.jpg"
                    data-setup="{}"
                >
                    <source src="./assets/videos/demo.mp4" type="video/mp4" />
                    <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    
                    </p>
                </video>
                {/* <!-- end hls vod --> */}

                {/* <!-- script for hls  --> */}
                <script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script>
            </div>
        </>
    )
}