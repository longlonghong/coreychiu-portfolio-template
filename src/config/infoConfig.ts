export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Long Hung'
export const headline = 'Product designer'
export const introduction = 'Hi there, I’m Long Hung, a product designer based in New York. I design thoughtful digital experiences, reflect through writing, and co-founded a local cat rescue.'
export const email = 'wanjunghung@gmail.com'
export const githubUsername = 'longlonghong'

// about page
export const aboutMeHeadline = "I’m Long Hung, a product designer based in New York."
export const aboutParagraphs = [
  "Hi there, I'm Long. I currently work at StreetEasy (part of the Zillow Group), where my passion lies in crafting thoughtful digital experiences.",
  "I’ve worked in areas like mobile gaming, fintech, real estate, and some personal and professional websites. I love design as a way to solve problems for people, not limited to any one industry. I bring my designer hat to explore different challenges, research deeply, and create with care and curiosity.",
  "Outside of work, I co-founded a local cat rescue with friends. I also enjoy wandering the city, traveling, cooking, and journaling."
]


// blog
export const blogHeadLine = "Things I've been thinking about."
export const blogIntro = "I write about product design, creative ideas, and what I’ve been learning through real work and reflection."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/wanjunghung/',
    external: true
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/longlonghong',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



