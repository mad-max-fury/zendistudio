"use client";
import { motion } from "framer-motion";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
];

const socials = [
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaBehance />, href: "https://behance.net" },
  { icon: <FaXTwitter />, href: "https://twitter.com" },
  { icon: <FaDribbble />, href: "https://dribbble.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl bg-white pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-[55px] px-4 sm:px-6 lg:px-8">
      <section className="max-w-[1100px] mx-auto w-full">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl sm:rounded-[60px] lg:rounded-[100px] px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between bg-linear-to-r from-[#DFFEF1] via-[#B0FFE6] to-[#C3E9FF] border border-[#00709C26] gap-6 md:gap-4"
        >
          <div className="max-w-[830px] w-full flex justify-between mx-auto max-md:flex-col max-md:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#00709C] text-center md:text-left max-w-[520px] leading-tight">
              Let's work together
            </h2>

            <button className="bg-[#303C49] cursor-pointer rounded-full px-6 sm:px-10 lg:px-[58px] py-3 sm:py-4 lg:py-5 text-white text-xs sm:text-sm font-medium hover:bg-[#515151] transition-colors whitespace-nowrap">
              SCHEDULE A FREE 30 MINS CALL
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between mt-12 sm:mt-16 lg:mt-24 gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base text-[#3D3D3D]">
            {["Home", "About", "Work", "Blog", "Services"].map((item, i) => (
              <motion.a
                key={i}
                href={"#"}
                className="relative hover:text-[#00709C] transition-colors"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              >
                <span>{item}</span>
              </motion.a>
            ))}
          </nav>

          {/* Email */}
          <motion.div
            className="text-sm sm:text-base text-[#3D3D3D] text-center lg:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            info@zendistudios.com
          </motion.div>

          {/* Socials */}
          <div className="flex gap-2 sm:gap-3">
            {[
              <FaLinkedinIn key="linkedin" />,
              <FaBehance key="behance" />,
              <FaXTwitter key="twitter" />,
              <FaDribbble key="dribbble" />,
              <FaInstagram key="instagram" />,
            ].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="h-8 w-8 sm:h-9 sm:w-9 flex items-center hover:scale-[1.15] hover:rotate-[4px] justify-center rounded-full bg-[#E6F1F5] transition-transform"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileTap={{ scale: 0.92 }}
              >
                {Icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 mt-6 sm:mt-8 lg:mt-[34px] bg-gradient-to-r from-[#54CFFF] to-[#33FFA7]" />

      {/* Logo Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end items-end max-w-[1100px] w-full mx-auto mt-6 sm:mt-8 lg:mt-[45px] px-4"
      >
        <svg
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[767px] h-auto"
          viewBox="0 0 767 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M703 1.00003C693.823 0.990728 684.758 3.01642 676.458 6.93125C668.158 10.8461 660.83 16.5526 655 23.64C655.33 23.23 655.67 22.83 656 22.43C640.4 36.94 629.18 53.36 629.18 75.25C629.18 91.7465 635.733 107.567 647.398 119.232C659.063 130.897 674.883 137.45 691.38 137.45C714.75 137.45 734.16 121.91 747.91 106.3V106.22C758.834 94.8574 765.02 79.7608 765.21 64V63.2C765.21 55.031 763.601 46.9419 760.474 39.3948C757.348 31.8477 752.765 24.9904 746.988 19.2145C741.212 13.4385 734.354 8.85711 726.806 5.73185C719.258 2.6066 711.169 0.998719 703 1.00003ZM703 116C692.567 115.998 682.369 112.903 673.695 107.106C665.021 101.309 658.26 93.0712 654.267 83.4327C650.274 73.7942 649.228 63.1883 651.262 52.9556C653.296 42.723 658.317 33.3229 665.692 25.9437C673.067 18.5645 682.465 13.5374 692.696 11.4979C702.928 9.45849 713.534 10.4982 723.175 14.4856C732.816 18.4731 741.058 25.2292 746.86 33.9001C752.661 42.5709 755.762 52.7672 755.77 63.2C755.775 70.1328 754.414 76.9986 751.764 83.405C749.115 89.8114 745.228 95.6328 740.328 100.536C735.427 105.44 729.608 109.33 723.203 111.983C716.798 114.636 709.933 116.001 703 116Z"
            stroke="url(#paint0_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M724.62 34.3699L699.45 30.6899H699.3C698.235 30.3975 697.119 30.3427 696.03 30.5293C694.941 30.7159 693.907 31.1395 693 31.7699C692.211 32.2988 691.592 33.0448 691.217 33.9178C690.843 34.7909 690.729 35.7537 690.89 36.6899C691.47 40.1099 692.73 42.2899 694.89 43.8699C697.05 45.4499 700.75 46.7199 706.4 47.4299L709.03 47.7599L708.62 50.3799C707.68 56.4399 707.77 60.4799 708.84 63.3799C709.84 66.0799 711.84 68.0999 715.65 69.7899C718.76 71.1599 722.71 69.1199 723.86 65.0399L727.86 38.7899C727.94 38.2867 727.919 37.7727 727.799 37.2776C727.679 36.7825 727.462 36.316 727.16 35.9052C726.859 35.4943 726.48 35.1471 726.044 34.8836C725.608 34.6201 725.124 34.4455 724.62 34.3699Z"
            stroke="url(#paint1_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M710.64 83.1701C708.41 81.4201 704.87 80.1001 699.24 79.1701L696.62 78.7501L697.13 76.1501C698.29 70.1501 698.36 66.1001 697.4 63.1501C696.5 60.4201 694.59 58.3301 690.81 56.5001C687.75 55.0101 683.72 56.9001 682.4 60.9201L677.4 86.9201C677.305 87.4206 677.309 87.935 677.414 88.4338C677.518 88.9325 677.72 89.4056 678.009 89.8258C678.297 90.246 678.665 90.605 679.093 90.882C679.52 91.1591 679.999 91.3488 680.5 91.4401L705.58 96.0701H705.73C706.789 96.4005 707.909 96.493 709.008 96.3409C710.108 96.1887 711.16 95.7958 712.09 95.1901C712.904 94.6983 713.556 93.9785 713.964 93.12C714.373 92.2615 714.521 91.3019 714.39 90.3601C713.93 87.0001 712.74 84.8201 710.64 83.1701Z"
            stroke="url(#paint2_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M1 62.5901H33.87L1 96.9001V114.12H55.43V99.9201H22.43L55.43 65.6101V48.3901H1V62.5901Z"
            stroke="url(#paint3_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M116.23 51.4801C110.874 48.482 104.817 46.9602 98.68 47.0701C92.6537 46.9141 86.692 48.3416 81.39 51.2101C76.5708 53.9382 72.6431 58.0013 70.08 62.9101C67.4133 67.9568 66.08 73.9835 66.08 80.9901C65.9167 87.3027 67.3148 93.5578 70.15 99.2001C72.7477 104.196 76.7759 108.305 81.72 111C87.1856 113.874 93.2967 115.3 99.47 115.14C108.67 115.14 116.053 113.233 121.62 109.42C127.187 105.607 130.583 99.8001 131.81 92.0001H111.69C110.643 97.6068 106.613 100.413 99.6 100.42C91.36 100.42 86.67 95.5102 85.53 85.6902H132.59V81.4901C132.701 75.2768 131.21 69.1395 128.26 63.6701C125.457 58.5706 121.292 54.3503 116.23 51.4801ZM85.92 73.2302C86.6266 68.8502 88.0733 65.6535 90.26 63.6401C92.6144 61.5714 95.6791 60.4961 98.81 60.6401C100.53 60.5706 102.246 60.8433 103.86 61.4424C105.474 62.0415 106.952 62.9551 108.21 64.1301C110.67 66.5581 112.144 69.8101 112.35 73.2601L85.92 73.2302Z"
            stroke="url(#paint4_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M182.94 46.28C179.003 46.3301 175.15 47.4203 171.77 49.44C168.031 51.5943 164.908 54.6726 162.7 58.38V48.52H143.77V114.25H162.7V76.13C162.648 74.4425 162.941 72.7621 163.562 71.1921C164.183 69.6221 165.118 68.1955 166.31 67C167.484 65.8146 168.888 64.882 170.436 64.2595C171.984 63.6369 173.642 63.3376 175.31 63.38C179.25 63.38 182.36 64.4566 184.64 66.61C186.92 68.7633 188.06 72.2033 188.06 76.93V114.26H206.86V73C206.86 64.4066 204.603 57.8133 200.09 53.22C197.868 50.9389 195.196 49.1442 192.244 47.9495C189.291 46.7549 186.123 46.1864 182.94 46.28Z"
            stroke="url(#paint5_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M265.37 58.6401C263.295 54.916 260.338 51.7573 256.76 49.4401C253.193 47.2202 249.061 46.0777 244.86 46.1501C239.784 46.0398 234.807 47.5611 230.66 50.4901C226.454 53.6022 223.182 57.808 221.2 62.6501C218.804 68.4647 217.64 74.7128 217.78 81.0001C217.647 87.303 218.811 93.5659 221.2 99.4001C223.183 104.277 226.452 108.525 230.66 111.69C234.792 114.655 239.775 116.199 244.86 116.09C249.059 116.161 253.19 115.022 256.76 112.81C260.342 110.493 263.299 107.33 265.37 103.6V114.12H284.17V22.1201H265.37V58.6401ZM261.62 94.8601C260.35 96.4019 258.754 97.6435 256.947 98.4959C255.14 99.3483 253.168 99.7903 251.17 99.7903C249.172 99.7903 247.199 99.3483 245.393 98.4959C243.586 97.6435 241.99 96.4019 240.72 94.8601C238.24 91.5668 237 86.9468 237 81.0001C237 75.0534 238.25 70.4968 240.75 67.3301C242.031 65.8055 243.631 64.5797 245.436 63.7387C247.241 62.8977 249.208 62.4619 251.2 62.4619C253.191 62.4619 255.159 62.8977 256.964 63.7387C258.769 64.5797 260.369 65.8055 261.65 67.3301C264.15 70.5701 265.4 75.1268 265.4 81.0001C265.4 86.8734 264.14 91.4934 261.62 94.8601Z"
            stroke="url(#paint6_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M315.32 48.3901H296.52V114.12H315.32V48.3901Z"
            stroke="url(#paint7_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M316.24 24.5898H295.6V40.4998H316.24V24.5898Z"
            stroke="url(#paint8_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M366.59 73.8898L353.18 72.5798C351.279 72.4741 349.442 71.8593 347.86 70.7998C347.246 70.2798 346.765 69.6215 346.456 68.8792C346.146 68.1369 346.017 67.3316 346.08 66.5298C346.055 65.5428 346.291 64.5667 346.765 63.7008C347.24 62.8348 347.935 62.1099 348.78 61.5998C350.989 60.3121 353.526 59.6969 356.08 59.8298C362.913 59.8298 366.813 62.4965 367.78 67.8298H386.18C385.888 64.7112 384.915 61.6947 383.328 58.9938C381.742 56.2929 379.582 53.9736 377 52.1998C371.667 48.4265 364.667 46.5432 356 46.5498C347.06 46.5498 340.007 48.4332 334.84 52.1998C332.349 53.9012 330.326 56.2012 328.956 58.8886C327.586 61.576 326.913 64.5646 327 67.5798C327 73.6332 328.82 78.2998 332.46 81.5798C336.1 84.8598 341.643 87.0298 349.09 88.0898L361.6 89.3998C366.86 90.1065 369.487 92.3432 369.48 96.1098C369.487 97.1291 369.21 98.1301 368.68 99.0008C368.15 99.8715 367.388 100.578 366.48 101.04C364.123 102.313 361.466 102.925 358.79 102.81C351.07 102.81 346.687 100.093 345.64 94.6598H326.37C326.767 97.8119 327.863 100.835 329.58 103.509C331.296 106.182 333.589 108.437 336.29 110.11C342.03 113.923 349.59 115.83 358.97 115.83C367.637 115.83 374.603 113.966 379.87 110.24C385.137 106.513 387.767 101.626 387.76 95.5798C387.76 88.9132 386.073 83.8765 382.7 80.4698C379.327 77.0632 373.957 74.8698 366.59 73.8898Z"
            stroke="url(#paint9_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M425.49 31.2998H406.55V48.3898H396.17V63.5098H406.55V93.3498C406.55 100.27 408.59 105.463 412.67 108.93C416.75 112.396 422.083 114.126 428.67 114.12H435.9V98.2098H431.4C430.592 98.2679 429.781 98.1515 429.022 97.8686C428.262 97.5856 427.573 97.1427 427 96.5698C426 95.4698 425.49 93.5698 425.49 90.8498V63.5098H435.87V48.3898H425.49V31.2998Z"
            stroke="url(#paint10_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M488.59 86.9101C488.647 88.5427 488.373 90.1699 487.785 91.6941C487.197 93.2183 486.308 94.6081 485.17 95.7801C484.042 96.9283 482.688 97.8304 481.194 98.4293C479.701 99.0283 478.099 99.3111 476.49 99.2601C474.886 99.3406 473.283 99.1038 471.771 98.5632C470.259 98.0227 468.869 97.1891 467.68 96.1101C465.487 94.0101 464.393 90.6768 464.4 86.1101V48.3901H445.6V90.0601C445.6 98.4801 447.813 104.967 452.24 109.52C454.403 111.764 457.011 113.531 459.898 114.707C462.784 115.884 465.885 116.443 469 116.35C472.772 116.309 476.466 115.274 479.71 113.35C483.353 111.25 486.407 108.264 488.59 104.67V114.14H507.52V48.3901H488.59V86.9101Z"
            stroke="url(#paint11_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M566.15 58.6401C564.075 54.916 561.119 51.7573 557.54 49.4401C553.973 47.2202 549.841 46.0777 545.64 46.1501C540.564 46.0398 535.587 47.5611 531.44 50.4901C527.241 53.6049 523.977 57.8104 522 62.6501C519.597 68.4632 518.426 74.7114 518.56 81.0001C518.433 87.3044 519.604 93.5674 522 99.4001C523.983 104.277 527.253 108.525 531.46 111.69C535.593 114.655 540.575 116.199 545.66 116.09C549.859 116.161 553.99 115.022 557.56 112.81C561.142 110.493 564.099 107.33 566.17 103.6V114.12H585V22.1201H566.2L566.15 58.6401ZM562.4 94.8601C561.13 96.4019 559.534 97.6435 557.727 98.4959C555.921 99.3483 553.948 99.7903 551.95 99.7903C549.952 99.7903 547.979 99.3483 546.173 98.4959C544.366 97.6435 542.77 96.4019 541.5 94.8601C539 91.5668 537.75 86.9434 537.75 80.9901C537.75 75.0368 539 70.4801 541.5 67.3201C542.781 65.7955 544.381 64.5697 546.186 63.7287C547.991 62.8877 549.959 62.4519 551.95 62.4519C553.942 62.4519 555.909 62.8877 557.714 63.7287C559.519 64.5697 561.119 65.7955 562.4 67.3201C564.9 70.5601 566.15 75.1168 566.15 80.9901C566.15 86.8634 564.9 91.4868 562.4 94.8601Z"
            stroke="url(#paint12_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M617.02 24.5898H596.38V40.4998H617.02V24.5898Z"
            stroke="url(#paint13_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M616.1 48.3901H597.3V114.12H616.1V48.3901Z"
            stroke="url(#paint14_linear_311_129)"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_311_129"
              x1="697.195"
              y1="1"
              x2="697.195"
              y2="137.45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_311_129"
              x1="709.363"
              y1="30.4209"
              x2="709.363"
              y2="70.2146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_311_129"
              x1="695.884"
              y1="55.9932"
              x2="695.884"
              y2="96.412"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_311_129"
              x1="28.215"
              y1="48.3901"
              x2="28.215"
              y2="114.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_311_129"
              x1="99.3315"
              y1="47.0586"
              x2="99.3315"
              y2="115.152"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_311_129"
              x1="175.315"
              y1="46.27"
              x2="175.315"
              y2="114.26"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_311_129"
              x1="250.969"
              y1="22.1201"
              x2="250.969"
              y2="116.095"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_311_129"
              x1="305.92"
              y1="48.3901"
              x2="305.92"
              y2="114.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_311_129"
              x1="305.92"
              y1="24.5898"
              x2="305.92"
              y2="40.4998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_311_129"
              x1="357.065"
              y1="46.5498"
              x2="357.065"
              y2="115.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_311_129"
              x1="416.035"
              y1="31.2998"
              x2="416.035"
              y2="114.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_311_129"
              x1="476.56"
              y1="48.3901"
              x2="476.56"
              y2="116.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_311_129"
              x1="551.775"
              y1="22.1201"
              x2="551.775"
              y2="116.095"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_311_129"
              x1="606.7"
              y1="24.5898"
              x2="606.7"
              y2="40.4998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_311_129"
              x1="606.7"
              y1="48.3901"
              x2="606.7"
              y2="114.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54CFFF" />
              <stop offset="1" stopColor="#33FFA7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </footer>
  );
}
