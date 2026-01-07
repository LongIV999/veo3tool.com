import React from 'react';
import type { BlogPost as BlogPostType } from '../../types/blog';
import BlogPost from './BlogPost';

interface BlogListProps {
    posts: BlogPostType[];
    limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ posts, limit }) => {
    const displayPosts = limit ? posts.slice(0, limit) : posts;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
                <BlogPost key={post.id} post={post} index={index} />
            ))}
        </div>
    );
};

export default BlogList;
