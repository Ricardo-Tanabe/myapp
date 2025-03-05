export interface ButtonLinkProp {
    name:string,
    linkName: string,
    css: string
}
  
type theme = "light" | "dark";
  
export interface ScreenThemeProp {
    theme: theme,
    setTheme:(theme: theme)=>void
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

export const menuData: MenuDataProp = {
    tutorials: {
        title: "Tutorials",
        subjects: [
            
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
            {
                subject: "JavaScript",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    },
                ]
            },
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
            {
                subject: "JavaScript",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    },
                ]
            },
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "JavaScript",
                        link_1: "#",
                        link_2: "#"
                    },
                    {
                        subtopic: "React",
                        link_1: "#",
                        link_2: "#"
                    }
                ]
            },
        ]
    },
    exercises: {
        title: "Exercises",
        subjects: [
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                ]
            }
        ]
    },
    certificates: {
        title: "Certificates",
        subjects: [
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                ]
            }
        ]
    },
    services: {
        title: "Services",
        subjects: [
            {
                subject: "HTML and CSS",
                items: [
                    {
                        subtopic: "HTML",
                        link_1: "#",
                        link_2: "#"
                    },
                ]
            }
        ]
    }
}
  