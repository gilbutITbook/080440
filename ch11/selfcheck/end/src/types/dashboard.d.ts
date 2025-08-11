interface User {
  id: number;
  name: string;
  email: string;
  followers: number;
  posts: number;
  isFollowing: boolean;
}

interface UserStats {
  totalUsers: number;
  totalFollowers: number;
  totalPosts: number;
  avgFollowers: number;
}
