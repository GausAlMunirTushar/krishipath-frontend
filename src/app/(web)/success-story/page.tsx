import successStories from "@/data/successStories";
import FarmerSuccessStory from "@/pages/web/success-story/FarmerSuccessStory";

const FarmerSuccessStoriesPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					কৃষক সাফল্য কাহিনী
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					আমাদের কৃষকদের সাফল্য কাহিনী দেখুন এবং জানুন কিভাবে তারা
					তাদের কৃষি খামার উন্নত করেছেন।
				</p>

				{/* Grid Layout for Success Stories */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{successStories.map((story, index) => (
						<FarmerSuccessStory
							key={index}
							image={story.image}
							name={story.name}
							location={story.location}
							story={story.story}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FarmerSuccessStoriesPage;
