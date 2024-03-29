import React from 'react'
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({videos, direction}:{videos:any, direction?:any}) => {
    // if(!videos?.length) return <Loader />;
 
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map(({item, idx}:any) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard  /> }
            {item.id.channelId && <ChannelCard  />}
        </Box>
        ))}
    </Stack>
    )
}

export default Videos