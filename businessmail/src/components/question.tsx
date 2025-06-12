"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";
import { getTestResult } from "@/lib/testResult";
import { useRouter } from "next/navigation"; // 🔹 追加

const chapterId = "chapter5";

const questions = [
  {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
  {
    question: "初対面の相手にメールを送るとき、最も適切な表現は？",
    options: ["どうも！", "初めまして。△△の〇〇と申します。", "よろしくね", "何かあれば教えて"],
    answer: "初めまして。△△の〇〇と申します。",
  },
  {
    question: "謝罪メールで避けるべき表現は？",
    options: ["申し訳ございません", "今後このようなことがないように", "確認いたします", "まあ大丈夫かと思います"],
    answer: "まあ大丈夫かと思います",
  },
  {
    question: "以下のうち、正しい敬語表現はどれ？",
    options: ["伺わせていただきます", "行かせてやります", "来てくれる？", "見ることができる"],
    answer: "伺わせていただきます",
  },
  {
    question: "日程調整メールでの適切な言い回しはどれ？",
    options: ["この日しか無理です", "あなたの都合に合わせます", "以下よりご都合の良い日をご教示ください", "どっちでもいいです"],
    answer: "以下よりご都合の良い日をご教示ください",
  },
];

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const router = useRouter(); // 🔹 ページ遷移用

  useEffect(() => {
    if (showScore) {
      getTestResult(chapterId)
        .then(setHistory)
        .catch((err) => console.error("履歴取得失敗:", err));
    }
  }, [showScore]);

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        const finalScore = score + (option === questions[current].answer ? 1 : 0);
        saveTestResult(chapterId, finalScore)
          .then((res) => {
            if (!res.success) {
              console.error("保存失敗:", res.error);
            }
          })
          .finally(() => {
            setShowScore(true);
          });
      }
    }, 1000);
  };

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">総合テスト</h1>

        {/* ▼ クイズ内容 or 結果表示 */}
{showScore ? (
  <Card>
    <CardContent className="p-6 text-center space-y-4">
      <h2 className="text-xl font-semibold text-blue-600">🎉 結果発表</h2>
      <p className="text-lg">
        あなたのスコア: <span className="font-bold">{score} / {questions.length}</span>
      </p>
      <Button onClick={() => {
        setCurrent(0);
        setScore(0);
        setSelected(null);
        setShowScore(false);
      }}>もう一度挑戦する</Button>

      <div className="mt-4">
        <Button variant="outline" onClick={() => router.push("/TestHistory")}>
          📚 テスト履歴を見る
        </Button>
      </div>
    </CardContent>
  </Card>
) : (

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-600">問題 {current + 1} / {questions.length}</p>
              <h2 className="text-lg font-semibold text-gray-800">{questions[current].question}</h2>
              <div className="grid gap-2">
                {questions[current].options.map((option, i) => (
                  <Button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className={`justify-start w-full text-left px-4 py-2 border rounded-md 
                      ${selected && option === questions[current].answer && "bg-green-100 border-green-400 text-black"} 
                      ${selected && option === selected && option !== questions[current].answer && "bg-red-100 border-red-400 text-black"} 
                      ${!selected && "bg-white text-black hover:bg-blue-50 border-gray-400"}
                    `}
                    disabled={!!selected}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
