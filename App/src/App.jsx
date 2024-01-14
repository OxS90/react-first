import "./App.css";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Statistics from "./statistics";
import Profile from "./Profile";
import FriendList from "./friends";
import TransactionHistory from "./transactions";

function App() {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
}

export default App;
