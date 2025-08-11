import { useCallback, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import UserCard from './UserCard';

// 사용자 정보 타입 정의
const calculateUserStats = (users: User[]): UserStats => {
  return {
    totalUsers: users.length, // 전체 사용자 수
    totalFollowers: users.reduce((acc, user) => acc + user.followers, 0), // 전체 팔로워 수
    totalPosts: users.reduce((acc, user) => acc + user.posts, 0), // 전체 게시물 수
    avgFollowers:
      users.reduce((acc, user) => acc + user.followers, 0) / users.length, // 평균 팔로워 수
  };
};

export default function Dashboard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: '김철수',
      email: 'kim@example.com',
      followers: 100,
      posts: 10,
      isFollowing: false,
    },
    {
      id: 2,
      name: '이영희',
      email: 'lee@example.com',
      followers: 40,
      posts: 20,
      isFollowing: false,
    },
    {
      id: 3,
      name: '박지민',
      email: 'park@example.com',
      followers: 200,
      posts: 5,
      isFollowing: false,
    },
    {
      id: 4,
      name: '정민수',
      email: 'jung@example.com',
      followers: 120,
      posts: 40,
      isFollowing: false,
    },
  ]);

  // 검색 및 정렬 상태
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'followers' | 'posts'>('followers');

  // 사용자 통계 계산 메모이제이션
  const stats = useMemo(() => calculateUserStats(users), [users]);

  // 사용자 필터링 및 정렬 메모이제이션
  const filterdUsers = useMemo(
    () =>
      users
        .filter((user) => user.name.includes(search))
        .sort((a, b) => b[sort] - a[sort]),
    [users, search, sort]
  );

  const handleFollow = useCallback(
    (id: number) => {
      setUsers((users) =>
        users.map((user) =>
          user.id === id
            ? {
                ...user,
                followers: user.isFollowing
                  ? user.followers - 1
                  : user.followers + 1,
                isFollowing: !user.isFollowing,
              }
            : user
        )
      );
    },
    [users]
  );

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-6'>사용자 대시보드</h1>

      {/* 통계 섹션 */}
      <div className='grid grid-cols-4 gap-4 mb-6'>
        <div className='p-4 bg-blue-50 rounded-lg'>
          <h3 className='text-sm text-gray-500'>전체 사용자</h3>
          <p className='text-2xl font-bold'>{stats.totalUsers}명</p>
        </div>
        <div className='p-4 bg-green-50 rounded-lg'>
          <h3 className='text-sm text-gray-500'>총 팔로워</h3>
          <p className='text-2xl font-bold'>{stats.totalFollowers}명</p>
        </div>
        <div className='p-4 bg-yellow-50 rounded-lg'>
          <h3 className='text-sm text-gray-500'>총 게시물</h3>
          <p className='text-2xl font-bold'>{stats.totalPosts}개</p>
        </div>
        <div className='p-4 bg-purple-50 rounded-lg'>
          <h3 className='text-sm text-gray-500'>평균 팔로워</h3>
          <p className='text-2xl font-bold'>{stats.avgFollowers}명</p>
        </div>
      </div>

      {/* 검색 및 정렬 컨트롤 */}
      <div className='flex gap-4 mb-6'>
        <div className='flex-1 relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
          <input
            type='text'
            placeholder='사용자 검색...'
            className='w-full pl-10 pr-4 py-2 border rounded-lg'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className='px-4 py-2 border rounded-lg bg-white'
          value={sort}
          onChange={(e) => setSort(e.target.value as 'followers' | 'posts')}
        >
          <option value='followers'>팔로워순</option>
          <option value='posts'>게시물순</option>
        </select>
      </div>

      {/* 사용자 목록 */}
      <div className='grid grid-cols-2 gap-4'>
        {filterdUsers.map((user) => (
          <UserCard key={user.id} {...user} handleFollow={handleFollow} />
        ))}
      </div>
    </div>
  );
}
