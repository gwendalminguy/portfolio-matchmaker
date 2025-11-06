import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

function ScoreboardRanking({ scoreboard, highlightedTeams }) {
  const [sortKey, setSortKey] = useState("total_score");
  const { t } = useTranslation();

  // Sorting the ranking table
  const ranking = useMemo(() => {
    if (!scoreboard) return [];
    return [...scoreboard.teams].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [scoreboard, sortKey]);

  return (
    <div className="w-full max-w-3xl overflow-x-auto bg-base-100/70 border border-base-300 shadow-lg rounded-2xl overflow-hidden mb-12">
      <table className="w-full border-collapse text-center">
        {/* Headers */}
        <thead className="bg-base-200/50 text-gray-500 uppercase text-sm border-b border-base-300">
          <tr>
            <th className="p-4 whitespace-nowrap">
              {t('rank')}
            </th>
            <th className="p-4 whitespace-nowrap">
              {t('team')}
            </th>
            <th className="p-4 whitespace-nowrap">
              {t('participants')}
            </th>
            <th className="p-4 whitespace-nowrap">
              {/* Sorting Button */}
              <button onClick={() => setSortKey("victories")} className={`uppercase cursor-pointer ${sortKey === "victories" ? "underline" : "hover:text-gray-400"}`}>
                {t('victories')}
              </button>
            </th>
            <th className="p-4 whitespace-nowrap">
              {t('defeats')}
            </th>
            <th className="p-4 whitespace-nowrap">
              {/* Sorting Button */}
              <button onClick={() => setSortKey("total_score")} className={`uppercase cursor-pointer ${sortKey === "total_score" ? "underline" : "hover:text-gray-400"}`}>
                {t('total_score')}
              </button>
            </th>
          </tr>
        </thead>
        {/* Rows */}
        <tbody>
          {ranking.map((team, index) => (
            <tr key={team.id} className={`border-t border-base-300 transition-all duration-500 ${(index + 1) % 2 === 0 ? "bg-base-200/30" : ""} ${
              highlightedTeams.some((t) => t.id === team.id && t.type === "won") ? "bg-success/25 text-success font-semibold" : highlightedTeams.some((t) => t.id === team.id && t.type === "lost") ? "bg-error/25 text-error font-semibold" : highlightedTeams.some((t) => t.id === team.id && t.type === "draw") ? "bg-warning/25 text-warning font-semibold" : ""
            } hover:bg-base-300/50`}>
              <td className="py-2 px-4 font-semibold">
                {index + 1}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {team.name}
              </td>
              <td className="py-2 px-4">
                {team.participants.map((participant) => participant.display_name).join(" & ")}
              </td>
              <td className="py-2 px-4">
                {team.victories}
              </td>
              <td className="py-2 px-4">
                {team.defeats}
              </td>
              <td className="py-2 px-4">
                {team.total_score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreboardRanking;
