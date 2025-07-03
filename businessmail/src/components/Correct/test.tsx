"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react"; 
import Image from "next/image";

const questions = [
  {
    question: "「はじめまして、よろしくお願いします。」\nこのメール冒頭の表現を、ビジネスメールとして適切な敬語に直してください。",
    answers: ["初めてメールにてご連絡申し上げます。", "初めてご連絡申し上げます。"],
    explanation: "「はじめまして、よろしくお願いします。」はカジュアルな表現であり、ビジネスメールの冒頭では不適切です。「初めてメールにてご連絡申し上げます」や「初めてご連絡申し上げます」のように丁寧な書き出しにしましょう。"
  },
  {
    question: "「おっしゃられました」は敬語として不適切です。\n正しい形に直してください。",
    answers: ["おっしゃった"],
    explanation: "「おっしゃられました」は「おっしゃる」と「られる」が重なった二重敬語です。正しくは「おっしゃった」とシンプルに使います。"
  },
  {
    question: "「拝見させていただきます」は敬語として不適切です。\n適切な表現に直してください。",
    answers: ["拝見します"],
    explanation: "「拝見させていただきます」は「拝見する（謙譲語）」に「させていただく（謙譲語）」が重なり、過剰な敬語になります。正しくは「拝見します」で十分丁寧です。"
  },
  {
    question: "依頼メールを送るとき、次のどのクッション言葉が適切ですか？\n\n（例）○○の件、対応をお願いします。",
    answers: ["お忙しいところ恐れ入りますが"],
    explanation: "「お忙しいところ恐れ入りますが」は相手の都合に配慮した丁寧なクッション言葉です。依頼やお願いをする際に適切に使えます。"
  },
  {
    question: "「すみませんが…」のカジュアルな表現を、丁寧なビジネス表現に言い換えてください。",
    answers: ["恐れ入りますが…","恐れ入りますが","恐縮ですが…", "恐縮ですが"],
    explanation: "「すみませんが…」はカジュアルな言い回しで、ビジネスの場では「恐れ入りますが…」や「恐縮ですが…」のように言い換えるのが望ましいです。"
  }
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

  const user = useUser();
  const [sessionId, setSessionId] = useState<string | null>(null);
  useEffect(() => {
  const startSession = async () => {
    if (!user?.id) return;
    const { data, error } = await supabase
      .from("study_sessions")
      .insert([
        {
          user_id: user.id,
          started_at: new Date(),
        },
      ])
      .select()
      .single();

    if (data) {
      setSessionId(data.id);
    } else {
      console.error("学習開始の記録に失敗:", error?.message);
    }
  };

  startSession();
}, [user]);

useEffect(() => {
  const endSession = async () => {
    if (!sessionId) return;
    await supabase
      .from("study_sessions")
      .update({ ended_at: new Date() })
      .eq("id", sessionId);
  };

  // 離脱時に呼ばれる
  window.addEventListener("beforeunload", endSession);
  return () => {
    endSession();
    window.removeEventListener("beforeunload", endSession);
  };
}, [sessionId]);

 

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Chapter3: 敬語変換テスト</h1>

        {showScore ? (
  <Card>
    <CardContent className="p-8 text-center space-y-3">
      <div className="flex justify-center">
        {score === questions.length ? (
          <Image src="/pass.png"
                  width={200}
                  height={200}
                 className="text-5xl"
                 alt="sad"></Image>
        ) : score >= questions.length * 0.8 ? (
          <div className="text-5xl">🎉</div>
        ) : (
          <Image src="/sad.png"
                  width={200}
                  height={200}
                 className="text-5xl"
                 alt="sad"></Image>
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
                      <p className="text-lg text-red-600">不正解。  
                          <div className="mt-2">
                            <h4 className="text-sm text-black font-semibold">✅ 正解例</h4>
                            <p className="text-gray-800 text-base">
                              {questions[current].answers}
                            </p>
                          </div>
                        </p>
                     <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">
                      <h3 className="text-sm text-black font-semibold">💡 解説</h3>
                      <p className="text-gray-800 text-base">
                         {questions[current].explanation}
                      </p>
                    </div>
                                      </>
                  )}
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
