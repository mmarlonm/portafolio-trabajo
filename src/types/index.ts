export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
}