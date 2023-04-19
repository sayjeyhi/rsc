import { UsersSearch } from "./UsersSearch.js";
import { getUser, searchUsers } from "./serverFuncs.js";

const App = ({ name = "Anonymous" }) => {
  return (
    <div style={{ border: "4px red dashed", margin: "1em", padding: "1em" }}>
      <h1>Hello {name}!!</h1>
      <h3>This is a server component.</h3>
      <UsersSearch getUser={getUser} searchUsers={searchUsers} />
    </div>
  );
};

export default App;
