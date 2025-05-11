import React from 'react';

const LetterboxdIcon = ({width, height}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
    >
        <style>
            {`
            .light-theme circle.letterboxd-inner-circle {
                fill: var(--light-bg);
            }
            .dark-theme circle.letterboxd-inner-circle {
                fill: var(--dark-bg);
            }
        `}
        </style>
        <circle
            cx="250"
            cy="250"
            r="245"
        />

        <circle
            className="letterboxd-inner-circle"
            cx="130"
            cy="250"
            r="70"
        />

        <circle
            className="letterboxd-inner-circle"
            cx="250"
            cy="250"
            r="70"
        />

        <circle
            className="letterboxd-inner-circle"
            cx="370"
            cy="250"
            r="70"
        />
    </svg>
);

export default LetterboxdIcon;