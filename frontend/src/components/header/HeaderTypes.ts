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
    subtopic: string,
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

