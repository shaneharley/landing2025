//import plugins
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

//import styles
import "@/styles/globals.css";
import "@/styles/tokens.css";
import "@/styles/typography.css"
import "@/styles/grids.css"

//import components
import { bodyFont, monoFont } from '@/helpers/fonts'

//import metadata
export { Meta as metadata } from '@/helpers/metadata'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${monoFont.variable}`}>
      <body data-theme="yellow">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
