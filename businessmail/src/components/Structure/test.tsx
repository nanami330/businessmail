"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
 {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
  {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
  {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
  {
    question: "ビジネスメールの基本構造に含まれないものはどれ？",
    options: ["挨拶", "要旨", "天気", "署名"],
    answer: "天気",
  },
];

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Chapter 1: 確認テスト </h1>

        {showScore ? (
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">🎉 結果発表</h2>
              <p className="text-lg">あなたのスコア: <span className="font-bold">{score} / {questions.length}</span></p>
              <Button onClick={() => {
                setCurrent(0);
                setScore(0);
                setSelected(null);
                setShowScore(false);
              }}>もう一度挑戦する</Button>
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
