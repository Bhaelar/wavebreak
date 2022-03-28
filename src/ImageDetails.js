import React from "react";
import { useLocation } from "react-router";

const ImageDetails = () => {
	const location = useLocation();
	const image = location.state;

	const { fullHDURL: url, tags, user, views, downloads, imageSize } = image;
	return (
		<div className="container mt-3">
			<div className="container">
				<img src={url} alt={tags} loading="lazy" />
			</div>

			<div className="container pt-3">
				<p className="pt-3">{user ? `Photographer: ${user}` : ""}</p>
				<p className="pt-3">{tags ? `Tags: ${tags}` : ""}</p>
				<p className="pt-3">{views ? `Views: ${views}` : ""}</p>
				<p className="pt-3">
					{downloads ? `Downloads: ${downloads}` : ""}
				</p>
				<p className="pt-3">{imageSize ? `Size: ${imageSize}` : ""}</p>
			</div>
		</div>
	);
};

export default ImageDetails;
