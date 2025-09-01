import React from "react";

export default function Result({ score, total, time }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="p-6 text-center bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🏆 Resultados Finais</h2>
      <p className="text-lg mb-2">Acertos: {score} de {total}</p>
      <p className="text-lg mb-2">Desempenho: {percentage}%</p>
      <p className="text-lg mb-4">⏱️ Tempo total: {time}s</p>

      {/* Leaderboard */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
        <ol className="list-decimal list-inside text-left">
          <li><b>Você</b> — {score} pts — {time}s</li>
          <li>Jogador 2 — {Math.floor(Math.random() * total)} pts — {10 + Math.floor(Math.random() * 20)}s</li>
          <li>Jogador 3 — {Math.floor(Math.random() * total)} pts — {15 + Math.floor(Math.random() * 30)}s</li>
        </ol>
      </div>
    </div>
  );
}
