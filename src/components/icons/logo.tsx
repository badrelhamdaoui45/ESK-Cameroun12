import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 2a10 10 0 0 0-2 19.5A10 10 0 0 0 12 2zM12 2a10 10 0 0 1 2 19.5A10 10 0 0 1 12 2z" opacity="0.4" />
      <path d="M10 17c.5-1.5 1.5-2.5 3-3 .5-1.5-1.5-2.5-3-3" />
      <path d="m14 7 .5-1 .5 1" />
    </svg>
  );
}
