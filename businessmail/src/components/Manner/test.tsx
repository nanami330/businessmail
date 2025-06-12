"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";

const questions = [
  {
    sentence: ["御社", "の", "口座", "に", "振り込ませていただきます。"],
    correctIndex: 0,
    explanation: "「御社」は書き言葉では「貴社」を使います。正しくは「貴社の口座に振り込ませていただきます」。"
  },
  {
    sentence: ["もしよろしければ", "面接日程", "を", "そちらの都合で", "決めてください。"],
    correctIndex: 3,
    explanation: "「そちらの都合で」は配慮に欠けます。「ご都合をお伺いできますと幸いです」などが適切です。"
  },
  {
    sentence: ["お疲れ様です。", "履歴書", "を", "ご査収", "ください。"],
    correctIndex: 3,
    explanation: "「ご査収ください」は誤用。「ご確認いただけますと幸いです」などが丁寧です。"
  },
  {
    sentence: ["まあ", "大丈夫", "かと", "思います。"],
    correctIndex: 0,
    explanation: "ビジネスメールでは「まあ〜」のカジュアル表現は避けます。「問題ございません」などが適切です。"
  },
  {
    sentence: ["山田太郎", "より", "送信", "しました。"],
    correctIndex: 2,
    explanation: "「送信しました」は不要。「以上、よろしくお願いいたします」などが自然です。"
  }
];

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === questions[current].correctIndex) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setShowExplanation(false);
    setShowScore(false);
  };

  useEffect(() => {
    if (showScore) {
      (async () => {
        const result = await saveTestResult("Chapter2", score);
        if (result.success) {
          console.log("保存成功");
        } else {
          console.error("保存失敗:", result.error?.message);
        }
      })();
    }
  }, [showScore]);

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Chapter2: 間違い探しテスト</h1>
        <p className="text-lg text-gray-600 mb-5">次の文章の中で【マナー上不適切な表現】を選んでください。</p>

        {showScore ? (
          <Card>
            <CardContent className="p-6 text-center space-y-6">
              <div className="flex justify-center text-5xl">
                {score === questions.length ? "🎯" : score >= 4 ? "🎉" : "💪"}
              </div>
              <h2 className="text-xl font-bold text-blue-600">結果発表</h2>
              <p className="text-xl">あなたのスコア： <span className="font-bold text-3xl">{score} / {questions.length}</span></p>

              <p className="text-lg text-gray-700">
                {score === questions.length
                  ? "完璧です！素晴らしい敬語力！"
                  : score >= 4
                  ? "とても良い成績です！もう少しで満点！"
                  : "復習してさらにレベルアップしましょう！"}
              </p>

              <Button onClick={handleRetry} className="w-full bg-green-400 hover:bg-green-500">もう一度挑戦する</Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 space-y-6 text-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {questions[current].sentence.map((word, index) => (
                  <span
                    key={index}
                    className={`px-3 py-2 border rounded-lg cursor-pointer text-center transition
                      ${selected === index ? "bg-blue-200 border-blue-500" : "border-gray-300"}
                      ${showResult && index === questions[current].correctIndex ? "bg-green-200 border-green-500" : ""}
                    `}
                    onClick={() => handleSelect(index)}
                  >
                    {word}
                  </span>
                ))}
              </div>

              {!showResult ? (
                <Button onClick={handleSubmit} className="w-full mt-4">回答する</Button>
              ) : (
                <>
                  {selected === questions[current].correctIndex ? (
                    <p className="text-green-600 font-semibold">正解！</p>
                  ) : (
                    <p className="text-red-600 font-semibold">不正解</p>
                  )}

                  {!showExplanation && (
                    <Button onClick={() => setShowExplanation(true)} className="w-full bg-red-400 hover:bg-red-500 mt-2">
                      解説を見る
                    </Button>
                  )}

                  {showExplanation && (
                    <p className="text-md text-gray-700 mt-2">{questions[current].explanation}</p>
                  )}

                  <Button onClick={handleNext} className="w-full mt-4 bg-blue-400 hover:bg-blue-500">次へ</Button>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
