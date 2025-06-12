"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { saveTestResult } from "@/lib/saveTestResult";

const chapterId = "writingTestForm";

export default function WritingTestForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [signature, setSignature] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const result = evaluate(to, subject, body, signature);
    setScore(result.total);
    setFeedback(result.feedback);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && score !== null) {
      (async () => {
        const res = await saveTestResult(chapterId, score);
        if (res.success) {
          console.log("保存成功");
        } else {
          console.error("保存失敗:", res.error?.message);
        }
      })();
    }
  }, [submitted, score]);

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">実践メールライティングテスト</h1>

        <Card>
          <CardContent className="p-6 space-y-6">

            <p className="text-lg font-semibold text-gray-700">
              【お題】<br />
              あなたは株式会社〇〇の営業担当です。<br />
              取引先の株式会社△△の田中様に、先日依頼していた資料の送付をお願いするメールを書いてください。
            </p>

            <div className="space-y-3">
              <div>
                <label>宛先（To）</label>
                <Input value={to} onChange={(e) => setTo(e.target.value)} disabled={submitted} />
              </div>

              <div>
                <label>件名</label>
                <Input value={subject} onChange={(e) => setSubject(e.target.value)} disabled={submitted} />
              </div>

              <div>
                <label>本文</label>
                <Textarea rows={10} value={body} onChange={(e) => setBody(e.target.value)} disabled={submitted} />
              </div>

              <div>
                <label>署名</label>
                <Textarea rows={3} value={signature} onChange={(e) => setSignature(e.target.value)} disabled={submitted} />
              </div>
            </div>

            {!submitted ? (
              <Button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600">採点する</Button>
            ) : (
              <>
                <p className="text-xl text-center">あなたのスコア: <span className="font-bold">{score} / 10</span></p>
                <p className="mt-3 text-md text-gray-700">{feedback}</p>

                <div className="mt-6 p-4 bg-gray-100 rounded-md">
      <h3 className="text-lg font-bold text-blue-600 mb-2">模範解答</h3>

      <div className="space-y-2 text-left">
        <p><strong>宛先:</strong> 株式会社△△ 田中様</p>
        <p><strong>件名:</strong> 資料ご送付のお願い</p>
        <p><strong>本文:</strong><br />
          お世話になっております。株式会社〇〇の〇〇でございます。<br />
          先日はお打ち合わせのお時間を頂き、誠にありがとうございました。<br />
          先日お願いしておりました○○に関する資料につきまして、恐れ入りますがご送付いただけますと幸いです。<br />
          お手数をおかけしますが、何卒よろしくお願い申し上げます。
        </p>
        <p><strong>署名:</strong><br />
          株式会社〇〇<br />
          営業部 〇〇<br />
          TEL: 03-1234-5678<br />
          Email: example@example.com
        </p>
      </div>
    </div>

    <Button onClick={() => {
      setSubmitted(false);
      setTo("");
      setSubject("");
      setBody("");
      setSignature("");
      setScore(null);
      setFeedback("");
    }} className="w-full mt-6 bg-green-400 hover:bg-green-500">
      もう一度挑戦する
    </Button>
  </>
)}

          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// 採点ロジック
function evaluate(to: string, subject: string, body: string, signature: string) {
  let total = 0;
  let feedback = "";

  if (to.includes("田中")) total += 1; else feedback += "✔ 宛先に宛名が不足しています。\n";
  if (subject.includes("資料")) total += 1; else feedback += "✔ 件名に資料送付依頼が反映されていません。\n";
  if (body.match(/お世話になっております/)) total += 2; else feedback += "✔ 挨拶が不足しています。\n";
  if (body.match(/資料.*(送付|お送り)/)) total += 3; else feedback += "✔ 依頼内容が明確ではありません。\n";
  if (body.match(/よろしくお願いいたします|ご確認お願いいたします|よろしくお願い申し上げます/)) total += 2; else feedback += "✔ 結びが弱いです。\n";
  if (signature.length >= 5) total += 1; else feedback += "✔ 署名が短すぎます。\n";

  if (total >= 10) {
    feedback = "完璧です！自然で丁寧なビジネスメールが書けています。";
    total = 10; // 上限
  }

  return { total, feedback };
}
