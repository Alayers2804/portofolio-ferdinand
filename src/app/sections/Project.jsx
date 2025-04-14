export default function Project({ title, description, timeEstimation }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-500 mt-2 text-sm">⏳ {timeEstimation}</p>
        </div>
    );
}