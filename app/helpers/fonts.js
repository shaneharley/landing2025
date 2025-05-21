//import tools
import localFont from 'next/font/local'

//this sets my local fonts
export const bodyFont = localFont({
  src: '../../public/fonts/neueMontreal-regular.otf',
  variable: '--body-fontFace',
  display: 'swap'
})

export const monoFont = localFont({
  src: '../../public/fonts/apercuMono-regular.otf',
  variable: '--mono-fontFace',
  display: 'swap'
})
