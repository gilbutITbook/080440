import { Users } from "lucide-react";

export default function UserCard({
  id,
  email,
  followers,
  isFollowing,
  name,
  posts,
  handleFollow,
}: User & {
  handleFollow: (id: number) => void;
}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>팔로워: {followers}명</span>
        <span>게시물: {posts}개</span>
      </div>

      <div className="flex gap-2">
        <button
          className={`flex-1 py-2 px-4 rounded ${
            !isFollowing
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleFollow(id)}
        >
          {isFollowing ? "팔로잉" : "팔로우"}
        </button>
      </div>
    </div>
  );
}
