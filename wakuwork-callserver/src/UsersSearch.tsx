"use client";

import { useState } from "react";

type User = {
  name: string;
  avatar: string;
};

export const UsersSearch = ({
  getUser,
  searchUsers,
}: {
  getUser: (id: number) => Promise<User>;
  searchUsers: (keyword: string) => Promise<User[]>;
}) => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState("");
  const [keyword, setKeyword] = useState("");
  const [userRes, setUserRes] = useState<any>(["idle"]);
  const [usersRes, setUsersRes] = useState<any>(["idle"]);

  return (
    <div style={{ border: "3px blue dashed", margin: "1em", padding: "1em" }}>
      <h3>This is a client component.</h3>
      <p>
        Local state: {count}{" "}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </p>
      <div>
        GetUser by Id:{" "}
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          onClick={async () => {
            setUserRes([`Calling action: ${userId}`]);
            const value = await getUser(parseInt(userId));
            setUserRes(value);
          }}
        >
          Call server function
        </button>
      </div>
      <pre>{JSON.stringify(userRes, null, 4)}</pre>

      <hr />
      <div>
        Search in users:{" "}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          onClick={async () => {
            setUsersRes([`Calling action: ${userId}`]);
            const value = await searchUsers(keyword);
            setUsersRes(value);
          }}
        >
          Call server function
        </button>
      </div>
      <pre>{JSON.stringify(usersRes, null, 4)}</pre>
    </div>
  );
};
