const SvgTitle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="30"
      viewBox="0 0 140 30"
    >
      <text
        id="GraffitiResize"
        transform="translate(0 25)"
        fill="#fff"
        fontSize="23"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          Graffiti
        </tspan>
        <tspan y="0" fill="#f611f6">
          Resize
        </tspan>
      </text>
    </svg>
  );
};

export default SvgTitle;
