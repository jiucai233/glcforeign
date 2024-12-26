import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "SEUM",
  DESCRIPTION: "SEUM",
  AUTHOR: "SEUM",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Our members.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "latest updates.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects we have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "glcforeign@gmail.com",
    HREF: "glcforeign@gmail.com",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "SEUM",
    HREF: "https://www.instagram.com/yonseiglc_seum/"
  },

]

