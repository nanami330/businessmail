"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";

const questions = [
  {
    question: "以下の文を敬語に直してください：「よろしくね！」",
    answers: [
      "何卒よろしくお願いいたします。",
      "よろしくお願いいたします。",
      "どうぞよろしくお願いいたします。",
      "宜しくお願いいたします。",
    ],
  },
  {
    question: "以下の文を敬語に直してください：「わかったら教えて！」",
    answers: [
      "お分かりになりましたらお知らせください。",
      "ご理解いただけましたらご連絡ください。",
      "お分かりでしたらお知らせください。",
    ],
  },
  {
    question: "以下の文を敬語に直してください：「この件、確認しといて！」",
    answers: [
      "こちらの件、ご確認をお願いいたします。",
       "こちらの件、ご確認お願いいたします。",
      "この件、ご確認お願いいたします。",
       "この件、ご確認をお願いいたします。",
      "ご確認のほどよろしくお願いいたします。",
    ],
  },
  {
    question: "以下の文を敬語に直してください：「手伝ってくれて助かったよ！」",
    answers: [
      "お手伝いいただき助かりました。",
      "お力添えいただきありがとうございました。",
      "ご協力いただき助かりました。",
    ],
  },
  {
    question: "以下の文を敬語に直してください：「今日、来てくれてありがとう！」",
    answers: [
      "本日はお越しいただきありがとうございます。",
      "本日はご来場いただきありがとうございます。",
      "本日はご足労いただきありがとうございます。",
    ],
  },
];

// 正規化（句読点・空白削除）
const normalize = (text: string) => {
  return text
    .replace(/[。、．，,.]/g, "")
    .replace(/\s/g, "")
    .replace(/　/g, "")
    .toLowerCase();
};

// 柔軟判定
const isCorrect = (input: string, answers: string[]) => {
  const normalizedInput = normalize(input);
  return answers.some(ans => normalize(ans) === normalizedInput);
};

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastResult, setLastResult] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    const correct = isCorrect(input, questions[current].answers);
    setLastResult(correct);
    if (correct) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setInput("");
      setSubmitted(false);
      setLastResult(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (showScore) {
      (async () => {
        const result = await saveTestResult("Chapter3", score);
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
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Chapter3: 敬語変換テスト</h1>

        {showScore ? (
  <Card>
    <CardContent className="p-8 text-center space-y-6">
      <div className="flex justify-center">
        {score === questions.length ? (
          <div className="text-5xl">🎯</div>
        ) : score >= questions.length * 0.8 ? (
          <div className="text-5xl">🎉</div>
        ) : (
          <div className="text-5xl">💪</div>
        )}
      </div>
      <h2 className="text-2xl font-bold text-blue-600">結果発表</h2>

      <p className="text-xl">
        あなたのスコア： <span className="font-bold text-3xl">{score} / {questions.length}</span>
      </p>

      <p className="text-lg text-gray-700">
        {score === questions.length
          ? "完璧です！素晴らしい敬語力！"
          : score >= questions.length * 0.8
          ? "とても良い成績です！もう少しで満点！"
          : "復習してさらにレベルアップしましょう！"}
      </p>

      <div className="space-y-2">
        <Button
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setInput("");
            setShowScore(false);
            setSubmitted(false);
            setLastResult(null);
            setShowExplanation(false);
          }}
          className="w-full bg-green-400 hover:bg-green-500"
        >
          もう一度挑戦する
        </Button>
      </div>
    </CardContent>
  </Card>
) : (

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-600">問題 {current + 1} / {questions.length}</p>
              <h2 className="text-lg font-semibold text-gray-800" style={{ whiteSpace: 'pre-line' }}>
                {questions[current].question}
              </h2>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 w-full"
                disabled={submitted}
              />
              {!submitted ? (
                <Button onClick={handleSubmit} className="w-full">回答する</Button>
              ) : (
                <>
                  {lastResult ? (
                    <p className="text-lg text-green-600">正解！</p>
                  ) : (
                    <>
                      <p className="text-lg text-red-600">不正解。</p>
                      {!showExplanation && (
                        <Button onClick={() => setShowExplanation(true)} className="w-full bg-red-400 hover:bg-red-500">解説を見る</Button>
                      )}
                      {showExplanation && (
                        <p className="text-md text-gray-700 mt-2">正しい答え例: {questions[current].answers[0]}</p>
                      )}
                    </>
                  )}
                  <Button onClick={handleNext} className="w-full mt-2 bg-blue-400 hover:bg-blue-500">次へ</Button>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
