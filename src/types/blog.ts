export interface BlogPost {
    id: string;
    day: number;
    title: string;
    excerpt: string;
    content: string;
    publishDate: string;
    featured?: boolean;
    category: 'AI' | 'Skills' | 'Learning' | 'Automation';
    readTime?: number; // minutes
    illustration?: string; // placeholder emoji or icon
}

export type BlogCategory = BlogPost['category'];
