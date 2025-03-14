export interface ButtonLinkProp {
    name:string,
    linkName: string,
    css: string
}
  
export interface ScreenThemeProp {
    theme: "light" | "dark",
    setTheme:(theme: "light" | "dark")=>void
}
  
export interface MenuItem {
    text_before: string,
    subtopic: string,
    text_1: string,
    text_2: string,
    link_1: string,
    link_2: string
}

export interface Subject {
    subject: string,
    items: MenuItem[]
}

export interface MenuSection {
    title: string,
    subjects: Subject[],
}

export interface MenuDataProp {
    tutorials: MenuSection,
    exercises: MenuSection,
    certificates: MenuSection,
    services: MenuSection
}

export type ItemsProp = {
    subject: string,
    items: React.ReactNode[]
}
  
