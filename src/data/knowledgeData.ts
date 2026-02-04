export interface PromptRecipe {
    id: string;
    title: string;
    description: string;
    prompt: string;
    visualHook: string; // Placeholder for image path
    tags: string[];
    bestFor: string;
    series: 'Style Transfers' | 'Professional Polish';
}

export const promptRecipes: PromptRecipe[] = [
    // Series A: Style Transfers
    {
        id: 'cyberpunk-glow',
        title: 'The Cyberpunk Glow-Up',
        description: 'Biến cảnh phố sá bình thường thành Night City.',
        prompt: 'neon lights, dark city backdrop, misty rain, chrome',
        visualHook: '/images/knowledge/cyberpunk.jpg', // Placeholder
        tags: ['Futuristic', 'Dramatic', 'Glowing'],
        bestFor: 'Tech demos, Music Videos',
        series: 'Style Transfers'
    },
    {
        id: 'pixar-style',
        title: 'Cartoonify (Pixar Style)',
        description: 'Chuyển đổi chân dung/nhân vật sang 3D Animation style.',
        prompt: '3D render, soft lighting, expressive features, Disney style',
        visualHook: '/images/knowledge/pixar.jpg',
        tags: ['3D', 'Cute', 'Expressive'],
        bestFor: 'Avatars, Storytelling',
        series: 'Style Transfers'
    },
    {
        id: 'surreal-dream',
        title: 'Surreal Dream Filter',
        description: 'Tạo không gian mộng mơ, phi thực tế.',
        prompt: 'soft haze, levitating objects, pastel tones, bending reality',
        visualHook: '/images/knowledge/surreal.jpg',
        tags: ['Dreamy', 'Pastel', 'Abstract'],
        bestFor: 'Art Films, Fashion',
        series: 'Style Transfers'
    },
    {
        id: 'noir-lighting',
        title: 'Noir Lighting Layout',
        description: 'Phong cách phim trinh thám cổ điển.',
        prompt: 'high contrast, black and white, shadows, dramatic lighting',
        visualHook: '/images/knowledge/noir.jpg',
        tags: ['Classic', 'Monochrome', 'Mystery'],
        bestFor: 'Mystery, Interviews',
        series: 'Style Transfers'
    },
    {
        id: 'anime-scene',
        title: 'Anime Scene Overlay',
        description: 'Phong cách hoạt hình Nhật Bản 2D.',
        prompt: 'cel shading, bold linework, speed lines, Makoto Shinkai style',
        visualHook: '/images/knowledge/anime.jpg',
        tags: ['2D', 'Vibrant', 'Action'],
        bestFor: 'Youth content, Action',
        series: 'Style Transfers'
    },

    // Series B: Professional Polish
    {
        id: 'magazine-cover',
        title: 'The Magazine Cover Edit',
        description: 'Biến ảnh chụp sản phẩm/CEO thành bìa tạp chí Forbes/Vogue.',
        prompt: 'luxury typography, white space, editorial lighting',
        visualHook: '/images/knowledge/magazine.jpg',
        tags: ['Luxury', 'Professional', 'Editorial'],
        bestFor: 'Branding, Profiles',
        series: 'Professional Polish'
    },
    {
        id: 'cinematic-treatment',
        title: 'The "Cinematic" Treatment',
        description: 'Biến video quay bằng điện thoại thành look điện ảnh.',
        prompt: 'anamorphic lens flares, film grain, color graded, teal and orange',
        visualHook: '/images/knowledge/cinematic.jpg',
        tags: ['Film', 'High-end', 'Moody'],
        bestFor: 'Commercials, Short Films',
        series: 'Professional Polish'
    }
];
