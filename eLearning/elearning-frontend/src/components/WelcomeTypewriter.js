import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Import the typewriter library

const WelcomeTypewriter = ({ username }) => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typewriterRef.current, {
            // loop: true,
            delay: 75,
            cursor: "",
        });

        typewriter
            .pauseFor(1000)
            .typeString(`Welcome ${username}! `)
            .start();
    }, [username]);

    return <div ref={typewriterRef} className="welcome-typewriter" />;
};

export default WelcomeTypewriter;
