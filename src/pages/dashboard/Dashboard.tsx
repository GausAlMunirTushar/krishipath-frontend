export default function DashboardContent() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold">Hello Tushar 👋</h1>
				<p className="text-gray-500">
					Let’s learn something new today!
				</p>
			</div>

			{/* Add sections here like RecentCourses, Resources, Calendar, etc. */}

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				<div className="bg-white rounded-lg shadow p-4">
					Recent Enrolled Course
				</div>
				<div className="bg-white rounded-lg shadow p-4">
					Your Resources
				</div>
				<div className="bg-white rounded-lg shadow p-4">Calendar</div>
				<div className="bg-white rounded-lg shadow p-4">
					Hours Spent
				</div>
				<div className="bg-white rounded-lg shadow p-4">
					Performance
				</div>
				<div className="bg-white rounded-lg shadow p-4">To Do List</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-white rounded-lg shadow p-4">
					Recent Enrolled Classes
				</div>
				<div className="bg-white rounded-lg shadow p-4">Tutorials</div>
			</div>
		</div>
	);
}
