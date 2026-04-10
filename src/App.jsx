import { useState } from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import stat from "./transactions.json"
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={stat} />
    </>
  );
}

export default App;
