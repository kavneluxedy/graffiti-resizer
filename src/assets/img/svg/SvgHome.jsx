import React from "react";

const SvgHome = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="300"
			height="300"
			viewBox="-50 25 300 150"
			style={{ width: props.width, height: "auto" }}
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="0.5"
					x2="0.5"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#7904c5" />
					<stop offset="1" stopColor="#f611f6" />
				</linearGradient>
			</defs>
			<text
				id="GraffitiResize"
				transform="translate(98 175.5)"
				fill="#f5f5f5"
				fontSize="38"
				fontFamily="NexaBold, NexaBold"
			>
				<tspan x="-97.737" y="0">
					Graffiti
				</tspan>
				<tspan y="0" fill="#f611f6">
					Resize
				</tspan>
			</text>

			<path
				id="Path_25"
				dataname="Path 25"
				d="M1566.152,523.288V507.414l14.557-19.1,21.667,26.018,9.328-6.919,19.57,15.874Z"
				transform="translate(-1492.775 -439.284)"
				stroke="#707070"
				strokeWidth="1"
				fill="url(#linear-gradient)"
			/>
			<line
				id="Line_6"
				dataname="Line 6"
				x2="82"
				transform="translate(53.5 84.003)"
				fill="none"
				stroke="#f611f6"
				strokeLinecap="round"
				strokeWidth="12"
			/>
			<g id="Group_8" dataname="Group 8" transform="translate(-90 -297.5)">
				<line
					id="Line_8"
					dataname="Line 8"
					x2="82"
					transform="translate(242 319.138) rotate(-180)"
					fill="none"
					stroke="#6c11f6"
					strokeLinecap="round"
					strokeWidth="12"
				/>
				<line
					id="Line_9"
					dataname="Line 9"
					y2="77.197"
					transform="translate(160 397.142) rotate(-180)"
					fill="none"
					stroke="#6c11f6"
					strokeLinecap="round"
					strokeWidth="12"
				/>
			</g>
			<line
				id="Line_10"
				dataname="Line 10"
				x1="8"
				y1="8"
				transform="translate(53.5 5)"
				fill="none"
				stroke="#f611f6"
				strokeLinecap="round"
				strokeWidth="3"
			/>
			<line
				id="Line_7"
				dataname="Line 7"
				y2="77.197"
				transform="translate(135.5 6)"
				fill="none"
				stroke="#f611f6"
				strokeLinecap="round"
				strokeWidth="12"
			/>
		</svg>
	);
};

export default SvgHome;
