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


/*
 {
        "id": 1,
        "title": "Guitar Fundamentals",
        "slug": "guitar-fundamentals",
        "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
        "price": 99.99,
        "instructor": "John Doe",
        "isFeatured": true,
        "image": "/courses/guitar.jpg" 
      },
 */