import localFont from "next/font/local";

export const overusedGrotesk = localFont({
  src: [
    { path: "./OverusedGrotesk-Light.otf", weight: "300", style: "normal" },
    {
      path: "./OverusedGrotesk-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    { path: "./OverusedGrotesk-Book.otf", weight: "350", style: "normal" },
    {
      path: "./OverusedGrotesk-BookItalic.otf",
      weight: "350",
      style: "italic",
    },
    { path: "./OverusedGrotesk-Roman.otf", weight: "400", style: "normal" },
    { path: "./OverusedGrotesk-Italic.otf", weight: "400", style: "italic" },
    { path: "./OverusedGrotesk-Medium.otf", weight: "500", style: "normal" },
    {
      path: "./OverusedGrotesk-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    { path: "./OverusedGrotesk-SemiBold.otf", weight: "600", style: "normal" },
    {
      path: "./OverusedGrotesk-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    { path: "./OverusedGrotesk-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./OverusedGrotesk-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    { path: "./OverusedGrotesk-ExtraBold.otf", weight: "800", style: "normal" },
    {
      path: "./OverusedGrotesk-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    { path: "./OverusedGrotesk-Black.otf", weight: "900", style: "normal" },
    {
      path: "./OverusedGrotesk-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-overused-grotesk",
  display: "swap",
});
