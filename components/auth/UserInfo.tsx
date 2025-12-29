import { User } from "@/types/user";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  console.log('=================' + user.email + '==' + user.role + '==' + user.createdAt + '');
  return (
    <div className="space-y-2 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl">
        {user.email}
      </div>
      <p className="font-semibold">{user.email}</p>
      <p className="text-sm text-gray-500">Role: {user.role}</p>
      <p className="text-sm text-gray-400">
        Joined {user.createdAt}
      </p>
    </div>
  );
}
