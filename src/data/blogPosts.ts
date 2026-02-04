import type { BlogPost, BlogCategory } from '../types/blog';

export const blogPosts: BlogPost[] = [
    {
        id: 'cyberpunk-glow-up',
        day: 10,
        title: 'Cyberpunk Glow-Up: Biến Video Điện Thoại Thành Thành Phố Neon',
        excerpt: 'Khám phá cách sử dụng lighting prompting và style transfer của Veo 3 để biến những thước phim đường phố bình thường thành kiệt tác Cyberpunk rực rỡ.',
        content: `
            Trong thế giới của Veo 3, ánh sáng không chỉ là yếu tố kỹ thuật, nó là ngôn ngữ cảm xúc. Bài viết này sẽ hướng dẫn bạn quy trình "Glow-Up" cho video quay bằng điện thoại:
            
            1. **Phân Tích Source**: Chọn video có độ tương phản tốt.
            2. **Prompting**: Sử dụng từ khóa như "neon-drenched", "chrome reflections", "wet pavement".
            3. **Parameter Tuning**: Điều chỉnh \`strength\` để cân bằng giữa chi tiết gốc và style mới.
            
            Kết quả là một video mang đậm chất tương lai, giữ được chuyển động tự nhiên nhưng khoác lên mình lớp áo thị giác hoàn toàn mới.
        `,
        publishDate: '2025-05-15',
        featured: true,
        category: 'AI',
        readTime: 5,
        illustration: '🌃'
    },
    {
        id: 'nano-banana-product',
        day: 8,
        title: 'Product-as-Art: Tạo Mockup 3D Tối Giản Sang Trọng',
        excerpt: 'Học cách sử dụng Nano Banana Pro để tạo ra những mockup sản phẩm 3D với ánh sáng studio hoàn hảo, nâng tầm thiết kế của bạn.',
        content: `
            Nano Banana Pro không chỉ là công cụ dựng hình, nó là một studio nhiếp ảnh ảo. Bí quyết nằm ở cách bạn kiểm soát ánh sáng và vật liệu:
            
            *   **Soft Lighting**: Giả lập softbox lớn để tạo bóng đổ mềm mại.
            *   **Materiality**: Định nghĩa tính chất vật lý của bề mặt (nhám, bóng, kim loại) qua prompt.
            *   **Composition**: Sử dụng quy tắc "negative space" để tôn vinh chủ thể.
            
            Biến ý tưởng sản phẩm thô sơ thành tác phẩm nghệ thuật marketing chỉ trong vài giây.
        `,
        publishDate: '2025-05-12',
        featured: false,
        category: 'Skills',
        readTime: 4,
        illustration: '🍌'
    },
    {
        id: 'cinematic-storytelling',
        day: 7,
        title: 'Cinematic Storytelling: Bí Mật Của Anamorphic Lens Flares',
        excerpt: 'Nâng cấp tính điện ảnh cho video AI của bạn bằng cách giả lập hiệu ứng ống kính Anamorphic, tạo ra những vệt sáng ngang đầy cảm xúc.',
        content: `
            Lens flare không phải là lỗi, nó là tính năng. Trong Veo 3, bạn có thể kiểm soát hoàn toàn hiệu ứng này:
            
            *   **Keyword**: "blue horizontal flare", "anamorphic streak".
            *   **Context**: Đặt nguồn sáng mạnh ở rìa khung hình hoặc phía sau chủ thể.
            *   **Emotion**: Sử dụng flare để tạo cảm giác sci-fi, bí ẩn hoặc hoài niệm.
            
            Một chi tiết nhỏ nhưng tạo ra sự khác biệt lớn giữa video nghiệp dư và chuyên nghiệp.
        `,
        publishDate: '2025-05-10',
        featured: false,
        category: 'Automation',
        readTime: 6,
        illustration: '🎬'
    },
    {
        id: 'prompt-engineering-101',
        day: 5,
        title: 'Prompt Engineering 101: Cấu Trúc Của Một Lệnh Hoàn Hảo',
        excerpt: 'Không còn đoán mò. Nắm vững cấu trúc giải phẫu của một prompt hiệu quả để giao tiếp chính xác với LongBest AI.',
        content: `
            Một prompt tốt giống như một công thức nấu ăn chính xác. Đừng viết văn, hãy viết mã lệnh cho trí tưởng tượng:
            
            1.  **Subject**: Chủ thể chính là gì?
            2.  **Medium**: Ảnh chụp, tranh vẽ, 3D render?
            3.  **Style**: Phong cách nghệ thuật, tham chiếu nghệ sĩ.
            4.  **Lighting/Color**: Ánh sáng và bảng màu chủ đạo.
            5.  **Technical**: Tỷ lệ khung hình, độ phân giải, engine render.
            
            Thành thạo cấu trúc này, bạn sẽ kiểm soát được 90% kết quả đầu ra.
        `,
        publishDate: '2025-05-05',
        featured: false,
        category: 'Learning',
        readTime: 7,
        illustration: '🧠'
    }
];

export const getFeaturedPost = (): BlogPost | undefined => {
    return blogPosts.find(post => post.featured);
};

export const getRegularPosts = (limit?: number): BlogPost[] => {
    const regularPosts = blogPosts.filter(post => !post.featured);
    if (limit) {
        return regularPosts.slice(0, limit);
    }
    return regularPosts;
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
    return blogPosts.filter(post => post.category === category);
};

export const getPostById = (id: string): BlogPost | undefined => {
    return blogPosts.find(post => post.id === id);
};
