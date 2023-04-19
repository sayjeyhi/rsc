"use server";

import Client from "pg/lib/client";

/**
 * Warning: DO NOT ADD YOUR SECRETS IN FILES!
 */
const client = new Client({
  connectionString:
    "postgresql://postgres:ghNhY5vReU0gFKASwRFl@containers-us-west-175.railway.app:7466/railway",
});
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err: any) => console.error("DB connection error", err.stack));

export const getUser = async (id: number) => {
  console.log("Getting user with id:", id);
  // WARNING: This is for demo purposes only.
  // We don't encourage this in real apps. There are far safer ways to access
  // data in a real application!
  const user = await client.query("SELECT * from users where id=" + id);
  console.log("Returning value", user.rows[0]);
  return user.rows[0];
};

export const searchUsers = async (keyword: string) => {
  console.log("Getting user for:", keyword);
  // WARNING: This is for demo purposes only.
  // We don't encourage this in real apps. There are far safer ways to access
  // data in a real application!
  const users = (
    await client.query(
      `select * from users where name ilike $1 order by id desc`,
      ["%" + keyword + "%"]
    )
  ).rows;

  console.log("Returning value", users);
  return users;
};
