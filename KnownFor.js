function KnownFor({ knownFor}) {
	return (
		<div>
		<h3>Known For:</h3>
		{knownFor.length > 0 ? (
			<ul>
			{knownFor.map((item) => (
				<li key={item.id}>
				<h4>{item.title || item.name}</h4>
				<p>Release Date: {item.release_date || "N/A"}</p>
				<p>Overview: {item.overview || "No overview available."}</p>
				</li>
			))}
			</ul>
		) : (
	<p> No known works found.</p>
		)}
		</div>
	);
	}

	export default KnownFor