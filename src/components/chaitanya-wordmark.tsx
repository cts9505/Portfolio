export function ChaitanyaWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1440 160"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // The skeleton outline defaults to transparent fill and a current-color stroke. 
        // On hover, it smoothly fills with the current color.
        className="cursor-pointer fill-transparent stroke-current transition-colors duration-300 hover:fill-current"
        strokeWidth="2"
        d="
          M128 32 H32 V128 H128 V160 H0 V0 H128 Z 
          M160 0 H192 V64 H256 V0 H288 V160 H256 V96 H192 V160 H160 Z 
          M352 0 H416 V32 H448 V160 H416 V96 H352 V160 H320 V32 H352 Z M352 32 H416 V64 H352 Z 
          M480 0 H576 V32 H544 V128 H576 V160 H480 V128 H512 V32 H480 Z 
          M608 0 H768 V32 H704 V160 H672 V32 H608 Z 
          M832 0 H896 V32 H928 V160 H896 V96 H832 V160 H800 V32 H832 Z M832 32 H896 V64 H832 Z 
          M960 0 H992 V32 H1024 V64 H1056 V0 H1088 V160 H1056 V128 H1024 V96 H992 V160 H960 Z 
          M1120 0 H1152 V64 H1184 V96 H1216 V64 H1248 V0 H1280 V64 H1248 V96 H1216 V160 H1184 V96 H1152 V64 H1120 Z 
          M1344 0 H1408 V32 H1440 V160 H1408 V96 H1344 V160 H1312 V32 H1344 Z M1344 32 H1408 V64 H1344 Z
        "
      />
    </svg>
  )
}

export function getWordmarkSVG() {
  // For the raw SVG string, I included a `<style>` block so the smooth skeleton-to-fill 
  // hover animation still works perfectly if someone downloads it or uses it elsewhere!
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 160">
  <style>
    .wordmark-path {
      fill: transparent;
      stroke: currentColor;
      stroke-width: 2px;
      transition: fill 0.3s ease;
      cursor: pointer;
    }
    .wordmark-path:hover {
      fill: currentColor;
    }
  </style>
  <path fill-rule="evenodd" clip-rule="evenodd" class="wordmark-path" d="M128 32 H32 V128 H128 V160 H0 V0 H128 Z M160 0 H192 V64 H256 V0 H288 V160 H256 V96 H192 V160 H160 Z M352 0 H416 V32 H448 V160 H416 V96 H352 V160 H320 V32 H352 Z M352 32 H416 V64 H352 Z M480 0 H576 V32 H544 V128 H576 V160 H480 V128 H512 V32 H480 Z M608 0 H768 V32 H704 V160 H672 V32 H608 Z M832 0 H896 V32 H928 V160 H896 V96 H832 V160 H800 V32 H832 Z M832 32 H896 V64 H832 Z M960 0 H992 V32 H1024 V64 H1056 V0 H1088 V160 H1056 V128 H1024 V96 H992 V160 H960 Z M1120 0 H1152 V64 H1184 V96 H1216 V64 H1248 V0 H1280 V64 H1248 V96 H1216 V160 H1184 V96 H1152 V64 H1120 Z M1344 0 H1408 V32 H1440 V160 H1408 V96 H1344 V160 H1312 V32 H1344 Z M1344 32 H1408 V64 H1344 Z" />
</svg>`
}