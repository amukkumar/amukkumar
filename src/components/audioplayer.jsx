import { useState } from 'react';

const AudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div>
            {isPlaying && (
                <audio autoPlay>
                    <source src={src} type="audio/mpeg" />
                </audio>
            )}
        </div>
    );
};

export default AudioPlayer;
