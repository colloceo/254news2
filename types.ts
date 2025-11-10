
export interface Article {
  id: string;
  title: string;
  slug: string;
  author: string;
  timestamp: string;
  featuredImage: string;
  category: string;
  content: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  views: number;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
}

export interface Comment {
    id: number;
    articleId: string;
    author: string;
    avatar: string;
    timestamp: string;
    text: string;
}

export interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    social: {
        twitter: string;
        linkedin: string;
    }
}
