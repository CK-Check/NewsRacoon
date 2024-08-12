import React from "react";

const NewsItem = (props) => {
	let { title, description, imageURL, newsUrl, author, date, source } = props;
	return (
		<div className="my-3">
			<div className="card">
				<img
					src={
						!imageURL
							? "https://carolinatigerrescue.org/wp-content/uploads/garcia.jpg"
							: imageURL
					}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{title ? title : "Unknown title"}...</h5>
					<span className="badge rounded-pill text-bg-info">{source.name}</span>
					<p className="card-text">
						<small className="text-body-secondary">
							By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
						</small>
					</p>
					<p className="card-text">
						{description ? description : "No description"}...
					</p>
					<a
						href={newsUrl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-sm btn-dark"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
