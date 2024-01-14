import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
	return (
		<section>
			<h2 className="title">{title}</h2>
			<ul className="stat-list">
				{stats.map((item) => {
					return (
						<li key={item.id} className="item">
							<span className="label">{item.label}</span>
							<span className="percentage">{item.percentage}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array,
};
export default Statistics;
