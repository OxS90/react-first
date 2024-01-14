import "./profile.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, stats }) => {
	// const className = clsx(
	// 	"first",
	// 	10,
	// 	undefined && "second",
	// 	true && "third",
	// 	false ? "fourth" : "fifth"
	// );

	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="User avatar" className="avatar" />
				<p className="name">{username}</p>
				<p className="tag">{"@" + tag}</p>
				<p className="location">{location}</p>
			</div>
			<ul className="stats">
				{Object.keys(stats).map((key) => (
					<li key={key}>
						<span className="label">
							{key.charAt(0).toUpperCase() + key.slice(1)}
						</span>
						<span className="quantity">{stats[key]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Profile;

Profile.propTypes = {
	username: PropTypes.string,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
	stats: PropTypes.object,
};
