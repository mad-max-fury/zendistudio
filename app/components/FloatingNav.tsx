"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { TbMenu4 } from "react-icons/tb";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Services", href: "/services" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const gradientStop = useTransform(scrollY, [0, 100], [-8.05, 100]);
  const boxShadowOpacity = useTransform(scrollY, [15, 100], [0, 0.15]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <motion.div
        style={{
          background: useTransform(
            gradientStop,
            (v) =>
              `linear-gradient(259.7deg, #FFFFFF ${v}%, rgba(255, 255, 255, 0) 33.94%)`
          ),
          boxShadow: useTransform(
            boxShadowOpacity,
            (v) => `0px 10px 21px rgba(0,0,0,${v})`
          ),
        }}
        className="flex fixed top-[clamp(30px,3vw,70px)] left-1/2 -translate-x-1/2 z-[400] items-center gap-10 py-[26px] px-6 rounded-full border border-white/30 backdrop-blur-sm w-fit max-md:w-[calc(100vw-2rem)] max-md:max-w-[90%]"
      >
        <Link href="/" className="w-10 h-10 flex items-center justify-center">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_110_205" fill="white">
              <path d="M39.2325 18.2942C39.2325 8.61446 31.3854 0.767455 21.7056 0.767455C12.0258 0.767457 4.17883 8.61446 4.17883 18.2942C4.17883 27.974 12.0258 35.8211 21.7056 35.8211V36.5885C11.602 36.5885 3.41138 28.3979 3.41138 18.2942C3.41138 8.19061 11.602 2.56177e-06 21.7056 0C31.8093 0 39.9999 8.19061 39.9999 18.2942C39.9999 28.3979 31.8093 36.5885 21.7056 36.5885V35.8211C31.3854 35.8211 39.2325 27.974 39.2325 18.2942Z" />
            </mask>
            <path
              d="M39.2325 18.2942C39.2325 8.61446 31.3854 0.767455 21.7056 0.767455C12.0258 0.767457 4.17883 8.61446 4.17883 18.2942C4.17883 27.974 12.0258 35.8211 21.7056 35.8211V36.5885C11.602 36.5885 3.41138 28.3979 3.41138 18.2942C3.41138 8.19061 11.602 2.56177e-06 21.7056 0C31.8093 0 39.9999 8.19061 39.9999 18.2942C39.9999 28.3979 31.8093 36.5885 21.7056 36.5885V35.8211C31.3854 35.8211 39.2325 27.974 39.2325 18.2942Z"
              fill="#303C49"
            />
            <path
              d="M21.7056 35.8211H16.2128V36.5885H21.7056H27.1985V35.8211H21.7056ZM39.2325 18.2942H50.2182V18.2942L39.2325 18.2942ZM21.7056 0.767455V-10.2183H21.7056L21.7056 0.767455ZM4.17883 18.2942L-6.8069 18.2942V18.2942H4.17883ZM21.7056 35.8211L21.7056 46.8068H21.7056V35.8211ZM21.7056 36.5885L21.7056 47.5742H21.7056V36.5885ZM3.41138 18.2942L-7.57436 18.2942V18.2942H3.41138ZM21.7056 0V-10.9857H21.7056L21.7056 0ZM39.9999 18.2942H50.9856V18.2942L39.9999 18.2942ZM39.2325 18.2942L50.2182 18.2942C50.2182 2.54716 37.4526 -10.2183 21.7056 -10.2183V0.767455V11.7532C25.3182 11.7532 28.2467 14.6817 28.2467 18.2942L39.2325 18.2942ZM21.7056 0.767455L21.7056 -10.2183C5.95858 -10.2183 -6.8069 2.5472 -6.8069 18.2942L4.17883 18.2942L15.1646 18.2942C15.1646 14.6817 18.0931 11.7532 21.7056 11.7532L21.7056 0.767455ZM4.17883 18.2942H-6.8069C-6.8069 34.0412 5.95854 46.8068 21.7056 46.8068L21.7056 35.8211L21.7056 24.8353C18.0931 24.8353 15.1646 21.9068 15.1646 18.2942H4.17883ZM21.7056 36.5885L21.7056 25.6028C17.6692 25.6027 14.3971 22.3306 14.3971 18.2942H3.41138H-7.57436C-7.57436 34.4651 5.53474 47.5742 21.7056 47.5742L21.7056 36.5885ZM3.41138 18.2942L14.3971 18.2942C14.3971 14.2579 17.6692 10.9857 21.7056 10.9857L21.7056 0L21.7056 -10.9857C5.53473 -10.9857 -7.57436 2.12336 -7.57436 18.2942L3.41138 18.2942ZM21.7056 0V10.9857C25.742 10.9857 29.0141 14.2579 29.0141 18.2942L39.9999 18.2942L50.9856 18.2942C50.9856 2.12336 37.8765 -10.9857 21.7056 -10.9857V0ZM39.9999 18.2942H29.0141C29.0141 22.3306 25.742 25.6027 21.7056 25.6027V36.5885V47.5742C37.8765 47.5742 50.9856 34.4651 50.9856 18.2942H39.9999ZM21.7056 35.8211V46.8068C37.4527 46.8068 50.2182 34.0413 50.2182 18.2942H39.2325H28.2467C28.2467 21.9068 25.3182 24.8353 21.7056 24.8353V35.8211Z"
              fill="#303C49"
              mask="url(#path-1-inside-1_110_205)"
            />
            <path
              d="M7.88851 6.30383C5.09968 9.51479 3.41168 13.7074 3.41167 18.2943C3.41167 28.3979 11.6022 36.5887 21.7059 36.5887C26.9006 36.5887 31.5895 34.4232 34.9196 30.9461V30.9719C30.8756 35.5615 25.1673 40.1324 18.2942 40.1324C8.19059 40.1324 0 31.9417 0 21.8381C1.19174e-05 15.4018 3.29986 10.571 7.88851 6.30383Z"
              fill="#303C49"
            />
            <path
              d="M18.7571 9.05054C19.2431 8.69473 19.9392 8.54078 20.6125 8.72144L20.6555 8.73315L28.0579 9.81519C28.6811 9.90629 29.1111 10.4877 29.0159 11.1111L27.8342 18.8337C27.4942 20.0313 26.3328 20.6323 25.4192 20.2292C24.2932 19.7325 23.7088 19.138 23.4153 18.3445C23.1015 17.496 23.0754 16.3052 23.3508 14.5242L23.47 13.7537L22.6975 13.657C21.0374 13.4485 19.985 13.0982 19.3118 12.6072C18.6783 12.145 18.3069 11.503 18.137 10.4988C18.0365 9.90474 18.2849 9.39624 18.7571 9.05054Z"
              fill="#303C49"
            />
            <path
              d="M18.7571 9.05054C19.2431 8.69473 19.9392 8.54078 20.6125 8.72144L20.6555 8.73315L28.0579 9.81519C28.6811 9.90629 29.1111 10.4877 29.0159 11.1111L27.8342 18.8337C27.4942 20.0313 26.3328 20.6323 25.4192 20.2292C24.2932 19.7325 23.7088 19.138 23.4153 18.3445C23.1015 17.496 23.0754 16.3052 23.3508 14.5242L23.47 13.7537L22.6975 13.657C21.0374 13.4485 19.985 13.0982 19.3118 12.6072C18.6783 12.145 18.3069 11.503 18.137 10.4988C18.0365 9.90474 18.2849 9.39624 18.7571 9.05054Z"
              stroke="#303C49"
            />
            <path
              d="M15.6438 17.6346C16.03 16.4533 17.2162 15.8985 18.1165 16.3348C19.2262 16.8729 19.7898 17.4873 20.054 18.2899C20.3363 19.1481 20.3174 20.3365 19.9739 22.1024L19.8254 22.8671L20.5959 22.993C22.2517 23.2638 23.2933 23.6517 23.9495 24.1669C24.567 24.6519 24.9149 25.307 25.0471 26.3153C25.1253 26.9116 24.8566 27.4093 24.3704 27.7362C23.8698 28.0726 23.1663 28.1996 22.4983 27.994L22.4553 27.9813L15.0774 26.6219C14.4563 26.5075 14.0473 25.9109 14.1663 25.2928L15.6438 17.6346Z"
              fill="#303C49"
            />
            <path
              d="M15.6438 17.6346C16.03 16.4533 17.2162 15.8985 18.1165 16.3348C19.2262 16.8729 19.7898 17.4873 20.054 18.2899C20.3363 19.1481 20.3174 20.3365 19.9739 22.1024L19.8254 22.8671L20.5959 22.993C22.2517 23.2638 23.2933 23.6517 23.9495 24.1669C24.567 24.6519 24.9149 25.307 25.0471 26.3153C25.1253 26.9116 24.8566 27.4093 24.3704 27.7362C23.8698 28.0726 23.1663 28.1996 22.4983 27.994L22.4553 27.9813L15.0774 26.6219C14.4563 26.5075 14.0473 25.9109 14.1663 25.2928L15.6438 17.6346Z"
              stroke="#303C49"
            />
          </svg>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href; // << ACTIVE STATE HERE

            return (
              <motion.div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className="text-[#333E49] font-medium text-[17px]"
                >
                  {item.label}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#33FFA7]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <button className="pl-8 pr-8 py-3 bg-[#81DBFF] text-[#303C49] font-semibold rounded-full">
            Free Consultation
          </button>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto p-2 text-[#333E49]"
        >
          <TbMenu4 size={24} />
        </button>
      </motion.div>

      {/* mobile dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-28 left-1/2 -translate-x-1/2 z-500 w-[calc(100%-2rem)] max-w-md md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden p-6 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-[#333E49] font-medium text-lg py-3 px-4 rounded-xl transition-colors ${
                  pathname === item.href
                    ? "bg-[#33FFA7]/15"
                    : "hover:bg-[#33FFA7]/10"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button className="w-full py-3 px-8 bg-[#81DBFF] text-[#303C49] font-semibold rounded-full mt-4">
              Free Consultation
            </button>
          </div>
        </motion.div>
      )}

      {/* backdrop */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[398] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
