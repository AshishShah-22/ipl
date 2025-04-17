import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/Loader";

export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (err) {
        console.error("Error fetching points table:", err);
        setError("Failed to load points table. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPointsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg bg-opacity-10 shadow-md p-6">
        <h3 className="text-2xl text-red-500 font-bold mb-6">Points Table</h3>
        <div className="text-center text-red-500 p-4">
          {error}
          <button onClick={() => {setLoading(true); setPointsTable();}} className = "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-white uppercase drop-shadow mb-6">Points Table</h3>

      <div className="overflow-x-auto rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg">
          <caption className="text-left text-white py-2">IPL 2025 Points Table</caption>
          <thead className="bg-gray-50 rounded-t-lg">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Played</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Won</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Lost</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">NRR</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pointsTable.map((team) => (
              <tr key={team.team} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={team.flag}
                      alt={team.team}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                      onError={(e) => {
                        e.target.src = "/default-team-flag.png";
                      }}
                    />
                    <span className="text-sm font-medium text-gray-900">{team.team}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center text-sm text-gray-500">{team.played}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-500">{team.won}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-500">{team.loss}</td>
                <td className="px-4 py-4 text-center text-sm font-semibold text-gray-900">{team.points}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-500">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}