export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 108 108"
      aria-hidden="true"
      className="logo-svg"
    >
      <path
        fill="#1152D4"
        d="M54 18 78 30v22c0 16-11 28-24 36-13-8-24-20-24-36V30Z"
      />
      <path
        fill="#fff"
        d="M44 52 50 58 64 44l4 4-18 18-10-10z"
      />
    </svg>
  )
}
