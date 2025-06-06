import React from "react";

interface FarmerSuccessStoryProps {
	image: string;
	name: string;
	location: string;
	story: string;
}

const FarmerSuccessStory: React.FC<FarmerSuccessStoryProps> = ({
	image,
	name,
	location,
	story,
}) => {
	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden">
			<img
				src={image}
				alt={`${name} Image`}
				className="w-full h-64 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-green-900">{name}</h3>
				<p className="text-sm text-gray-500">{location}</p>
				<p className="mt-4 text-gray-700">{story}</p>
			</div>
		</div>
	);
};

export default FarmerSuccessStory;
