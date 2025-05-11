import React from 'react';

const SerializdIcon = ({width, height}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 62 62"
        xmlns="http://www.w3.org/2000/svg"
    >
        <style>
            {`
            .light-theme rect.serializd-inner-rect {
                fill: var(--light-bg);
            }
            .light-theme rect.serializd-inner-inner-rect {
                stroke: var(--dark-bg);
                fill: var(--dark-bg);
            }
            .dark-theme rect.serializd-inner-rect {
                fill: var(--dark-bg);
            }
            .dark-theme rect.serializd-inner-inner-rect {
                stroke: var(--light-bg);
                fill: var(--light-bg);
            }
        `}
        </style>
        <circle
            cx="31.084354"
            cy="30.962391"
            r="30.250097"
        />
        <rect
            className="serializd-inner-rect"
            width="10.468656"
            height="48.239571"
            x="36.674072"
            y="-8.1700039"
            ry="5.2343278"
            transform="rotate(24.285878)"
        />
        <rect
            className="serializd-inner-inner-rect"
            width="0.069945179"
            height="28.677525"
            x="39.916271"
            y="1.1874608"
            ry="0.034972589"
            transform="rotate(24.937575)"
        />
    </svg>
);

export default SerializdIcon;