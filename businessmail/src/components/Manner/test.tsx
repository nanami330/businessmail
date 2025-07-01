"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";
import Image from "next/image";

const questions = [
  {
    question: "ビジネスメールにおける件名の扱いとして、最も適切なものはどれですか？",
    choices: [
      "件名はできるだけ詳しく、50字以上を目安に書く",
      "件名がなくても、本文が丁寧であれば問題ない",
      "【重要】や【至急】などの言葉を頻繁に使って目を引かせる",
      "用件がひと目で分かるよう、簡潔に20字前後でまとめる",
    ],
    correctIndex: 3,
    explanation: "件名は受信者が内容を一目で理解できるよう、簡潔に20字前後で記載するのが理想です",
  },
  {
    question: "添付ファイルを送る際のマナーとして適切なものはどれですか？",
    choices: [
      "添付するファイルは本文で説明しなくても相手が確認してくれる",
      "添付した旨とあわせて、ファイル名や内容を一言添えると丁寧である",
      "複数の添付ファイルがある場合でも、すべて本文で詳細に記述する必要はない",
      "ファイルは送信後に気づけば、追って説明すればよい",
    ],
    correctIndex: 1,
    explanation: "添付ファイルがある場合は、その旨を明記し、内容を簡潔に説明することで受信者の手間を省けます",
  },
  {
    question: "メールの送信時間として望ましいのは次のうちどれですか？",
    choices: [
      "夜遅くの方が相手に見てもらいやすいので夜間に送る",
      "送信はいつでもよいが、返信を急かさないようにする",
      "相手が読みやすいよう、業務時間内に送信するのが望ましい",
      "週末は他のメールが少ないため、日曜日に送信するのが理想",
    ],
    correctIndex: 2,
    explanation: "メールは基本的に業務時間内に送信するのが望ましく、相手への配慮が重要です",
  },
  {
    question: "「ご苦労様です」という表現について、適切に説明しているものはどれですか？",
    choices: [
      "目上の人に使うことで丁寧さを強調できる表現である",
      "社内外を問わず、すべての相手に使える万能な表現である",
      "目上の人には「お疲れ様です」を使うのが適切である",
      "あいさつとして必ず使うべき定型表現である",
    ],
    correctIndex: 2,
    explanation: "「ご苦労様です」は基本的に目下の人に対して使う言葉で、目上の人には「お疲れ様です」が適切です",
  },
  {
    question: "メールの返信における件名の扱いとして正しいものはどれですか？",
    choices: [
      "件名が長くなっても毎回新しく書き換えるべきである",
      "返信時は件名を削除してもよい",
      "「RE:」を残して元の件名を保持するのが適切である",
      "返信では件名を空白にし、本文で説明するのが一般的である",
    ],
    correctIndex: 2,
    explanation: "返信では「RE:」を残すことで、やり取りの経緯が分かりやすくなります",
  },
];

export default function Question() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (showScore) {
      (async () => {
        const result = await saveTestResult("Chapter2", score);
        if (result.success) console.log("保存成功");
        else console.error("保存失敗:", result.error?.message);
      })();
    }
  }, [showScore]);

  const handleSelect = (index: number) => setSelected(index);

  const handleSubmit = () => {
    if (selected === questions[current].correctIndex) setScore(score + 1);
    setShowResult(true);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setShowScore(false);
  };

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Chapter2: マナークイズ</h1>

        {showScore ? (
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex justify-center text-5xl">
                {score === questions.length ? "🎯" : score >= 4 ? "🎉" :  
                <Image src="/sad.png"
                                  width={200}
                                  height={200}
                                 className="text-5xl"
                                 alt="sad"></Image>}
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
    {/* 問題見出し */}
    <div>
      <h2 className="text-sm text-blue-600 font-semibold mb-1">📘 問題</h2>
      <p className="text-xl font-bold text-gray-800">{questions[current].question}</p>
    </div>

    {/* 区切り線 */}
    <hr className="border-gray-300" />

    {/* 選択肢 */}
    <div className="space-y-3 mt-4 text-md">
      {questions[current].choices.map((choice, index) => (
        <div
          key={index}
          className="flex items-start gap-2 cursor-pointer"
          onClick={() => handleSelect(index)}
        >
          <span className="text-blue-600 text-4xl ">
            {selected === index ? "●" : "○"}
          </span>
          <span className="text-gray-800 text-sm mt-3 ml-1">{choice}</span>
        </div>
      ))}
    </div>
              {!showResult ? (
                <Button onClick={handleSubmit} className="w-full mt-4">回答する</Button>
              ) : (
                <>
                  <p className={`font-semibold ${selected === questions[current].correctIndex ? "text-green-600" : "text-red-600"}`}>
                    {selected === questions[current].correctIndex ? "正解！" : "不正解"}
                  </p>
                  
                    {selected !== questions[current].correctIndex && (
    <div className="mt-2">
      <h4 className="text-sm text-black font-semibold">✅ 正解</h4>
      <p className="text-gray-800 text-base">
        {questions[current].choices[questions[current].correctIndex]}
      </p>
    </div>
  )}
                  <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">
    <h3 className="text-sm text-black font-semibold">💡 解説</h3>
    <p className="text-gray-800 text-base">{questions[current].explanation}</p>
  </div>
                  {current + 1 < questions.length ? (
                                     <Button onClick={handleNext} className="w-full mt-4 bg-blue-400 hover:bg-blue-500">
                                       次へ
                                     </Button>
                                   ) : (
                                     <Button onClick={() => setShowScore(true)} className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                                       結果を表示する
                                     </Button>
                                   )}
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
