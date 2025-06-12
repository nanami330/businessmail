"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getTestResult } from "@/lib/testResult";

export default function TestHistory() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestResult("chapter5") // 必要に応じて全章の履歴を取得するよう変更可能
      .then(setHistory)
      .catch((err) => console.error("履歴取得失敗:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">📝 テスト履歴</h1>

        {loading ? (
          <p className="text-gray-500">読み込み中...</p>
        ) : history.length === 0 ? (
          <p className="text-gray-600">履歴がありません。</p>
        ) : (
          <div className="space-y-4">
            {history.map((entry, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 text-sm text-gray-700">
                  <p><strong>日時:</strong> {new Date(entry.created_at).toLocaleString()}</p>
                  <p><strong>スコア:</strong> {entry.score} 点</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
