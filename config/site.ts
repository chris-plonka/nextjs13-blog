export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    };
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and lovely travel blog which shares experiences and citiest around the world!",
    currentlyAt: "Pisarzowice",
    socialLinks: {
        twitter: "https://www.github.com/chris-plonka",
        instagram: "https://www.github.com/chris-plonka",
        github: "https://www.github.com/chris-plonka",
        youtube: "https://www.github.com/chris-plonka",
        linkedin: "https://www.github.com/chris-plonka",
    },
};

export default siteConfig;
