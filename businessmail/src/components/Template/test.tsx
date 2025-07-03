"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveTestResult } from "@/lib/saveTestResult";
import Image from "next/image";

// 正規化関数：ゆれ吸収
const normalize = (str: string): string => {
  return str
    .replace(/\s/g, "")
    .replace(/[ー－]/g, "ー")
    .replace(/[、,]/g, "")
    .replace(/[。\.]/g, "")
    .replace(/　/g, "")
    .replace(/[^一-龥ぁ-んァ-ンa-zA-Z0-9]/g, "")
    .toLowerCase();
};

// 5問構成のマナー問題 + 解説追加
const questions = [
  {
    question: "以下の空欄に適切な挨拶表現を入力してください。",
    sentence: `（1）、先日はお忙しい中お時間をいただきありがとうございました。`,
    answers: ["お世話になっております"],
    explanation: "ビジネスメール冒頭では「お世話になっております」が最も一般的な挨拶です。",
  },
  {
    question: "以下の空欄に適切な敬語表現を入力してください。",
    sentence: `お手数をおかけし（1）が、何卒よろしくお願いいたします。`,
    answers: ["恐縮です"],
    explanation: "「恐縮です」は感謝や謝罪の意を柔らかく表す敬語表現です。",
  },
  {
    question: "以下の謝罪メールの空欄を埋めてください。",
    sentence: `この度は（1）をおかけし、誠に申し訳ございませんでした。`,
    answers: ["ご迷惑"],
    explanation: "謝罪の定型表現として「ご迷惑をおかけし〜」がよく使われます。",
  },
  {
    question: "以下の依頼メールの空欄を埋めてください。",
    sentence: `お忙しいところ恐縮ですが、（1）いただけますと幸いです。`,
    answers: ["ご確認"],
    explanation: "依頼やお願いをする際は「ご確認いただけますと幸いです」と丁寧に表現します。",
  },
  {
    question: "以下の電話の取次ぎ表現の空欄を埋めてください。",
    sentence: `少々（1）いただけますでしょうか。ただいま担当者に（2）いたします。`,
    answers: ["お待ち", "おつなぎ"],
    explanation: "電話取次ぎでは「少々お待ちください」「おつなぎいたします」が定型表現です。",
  }
];

export default function Question() {
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [inputs, setInputs] = useState<string[]>(questions[0].answers.map(() => ""));
  const [showScore, setShowScore] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleInputChange = (value: string, index: number): void => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = (): void => {
    const correct = questions[current].answers.every((ans, idx) =>
      normalize(ans) === normalize(inputs[idx])
    );
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const handleNext = (): void => {
    if (current + 1 < questions.length) {
      const nextInputs = questions[current + 1].answers.map(() => "");
      setCurrent(current + 1);
      setInputs(nextInputs);
      setSubmitted(false);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (showScore) {
      (async () => {
        const result = await saveTestResult("Chapter4", score);
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
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Chapter 4: 空欄補充マナー問題</h1>

{showScore ? (
  <Card>
    <CardContent className="p-6 text-center space-y-3">
      <div className="flex justify-center text-5xl">
        {score === questions.length ? <Image src="/pass.png"
                                          width={200}
                                          height={200}
                                         className="text-5xl"
                                         alt="sad"></Image>
                                         : score >= 4 ? 
                                         <Image src="/pass.png"
                                          width={200}
                                          height={200}
                                         className="text-5xl"
                                         alt="sad"></Image>
                                         :  
                      <Image src="/sad.png"
                          width={200}
                          height={200}
                         className="text-5xl"
                         alt="sad"></Image>}
      </div>
      <h2 className="text-2xl font-bold text-blue-600">結果発表</h2>
      <p className="text-xl">
        あなたのスコア： <span className="font-bold text-3xl">{score} / {questions.length}</span>
      </p>
      <p className="text-lg text-gray-700">
        {score === questions.length
          ? "完璧です！これでどんなパターンのメールでもばっちりです！"
          : score >= 4
          ? "とても良い成績です！もう少しで満点！"
          : "復習してさらにレベルアップしましょう！"}
      </p>

      <Button onClick={() => {
        setCurrent(0);
        setScore(0);
        setInputs(questions[0].answers.map(() => ""));
        setShowScore(false);
        setSubmitted(false);
      }} className="w-full bg-green-400 hover:bg-green-500">もう一度挑戦する</Button>
    </CardContent>
  </Card>
) : (

          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-gray-600">問題 {current + 1} / {questions.length}</p>
              <h2 className="text-lg font-semibold text-gray-800">{questions[current].question}</h2>
              <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{questions[current].sentence}</pre>

              {!submitted ? (
                <>
                  {questions[current].answers.map((_, idx) => (
                    <div key={idx} className="mb-2">
                      <label>（{idx + 1}）</label>
                      <Input
                        type="text"
                        value={inputs[idx]}
                        onChange={(e) => handleInputChange(e.target.value, idx)}
                        placeholder="ここに入力"
                        className="w-full"
                      />
                    </div>
                  ))}
                  <Button onClick={handleSubmit} className="w-full mt-3">回答する</Button>
                </>
              ) : (
                <>
           {isCorrect ? (
                <p className="text-green-600 font-semibold">正解！</p>
              ) : (
                <>
                  <p className="text-red-600 font-semibold">不正解</p>
                  <div className="text-gray-700 text-sm mt-2">
                    {questions[current].answers.map((ans, idx) => (
                      <div key={idx}>（{idx + 1}）正解：{ans}</div>
                    ))}
                  </div>
                </>
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
