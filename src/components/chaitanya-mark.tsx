export function ChaitanyaMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1152 640"
      aria-hidden
      {...props}
    >
      {/* C — Medium-Bold (thickness 152px) */}
      <path
        fill="currentColor"
        d="
          M512 0H152v152h360Z
          M152 152H0v336h152Z
          M512 488H152v152h360Z
        "
      />

      {/* S — Medium-Bold (thickness 152px), offset x=640 */}
      <path
        fill="currentColor"
        d="
          M1152 0H640v152h512Z
          M792 152H640v92h152Z
          M1152 244H640v152h512Z
          M1152 396H1000v92h152Z
          M1152 488H640v152h512Z
        "
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1152 640"><path fill="currentColor" d="M512 0H152v152h360ZM152 152H0v336h152ZM512 488H152v152h360Z"/><path fill="currentColor" d="M1152 0H640v152h512ZM792 152H640v92h152ZM1152 244H640v152h512ZM1152 396H1000v92h152ZM1152 488H640v152h512Z"/></svg>`
}