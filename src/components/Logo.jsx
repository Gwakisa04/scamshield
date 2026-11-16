export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 108 108"
      aria-hidden="true"
      className="logo-svg"
    >
      <defs>
        <linearGradient id="logoShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A62639" />
          <stop offset="1" stopColor="#4A0E18" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logoShield)"
        d="M54 18 78 30v22c0 16-11 28-24 36-13-8-24-20-24-36V30Z"
      />
      <path fill="#fff" d="M44 52 50 58 64 44l4 4-18 18-10-10z" />
    </svg>
  )
}
