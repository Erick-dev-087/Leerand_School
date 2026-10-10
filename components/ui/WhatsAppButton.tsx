"use client";

import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

/** Floating, branded WhatsApp button. Circular on mobile, expands on desktop. */
export default function WhatsAppButton() {
  const pathname = usePathname();

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source: pathname || "unknown" })}
      aria-label="Chat with Leerand School on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-lg shadow-black/20 transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:shadow-xl sm:hover:gap-2"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 flex-shrink-0 fill-current"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.42 9.42 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.43 9.43zm8.03-17.46A11.32 11.32 0 0 0 12.04 1C5.78 1 .69 6.09.69 12.35c0 1.99.52 3.93 1.51 5.64L.6 23.86l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-editorial group-hover:max-w-[8rem] group-hover:opacity-100 sm:inline">
        Enquire
      </span>
    </a>
  );
}
