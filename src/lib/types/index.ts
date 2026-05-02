export interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image?: string;
}

export interface musicTestimonial {
    quote: string;
    name: string;
    title: string;
}

export interface Webinar {
    title : string;
    description: string;
    slug: string;
    isFeatured: boolean;
}
export interface MusicSchoolContent {
    title: string;
    description: string;
}

export interface Instructor {
    id: number;
    name: string;
    image: string;
    designation: "string"
}
