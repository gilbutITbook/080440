import { use } from "react";

export default function User({
  userPromise,
}: {
  userPromise: Promise<{ name: string; email: string }>;
}) {
  const user = use(userPromise);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.email}</p>
    </div>
  );
}
