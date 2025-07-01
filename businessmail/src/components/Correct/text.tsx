"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "⚠️ 言葉遣いの注意点 - 初めてのメール",
    content: (
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>NG：お世話になっております</li>
        <li>OK：初めてメールにてご連絡申し上げます</li>
        <li>※「はじめまして」は口語表現のため、ビジネスメールでは避ける</li>
      </ul>
    ),
  },
  {
    title: "🙇‍♀️ 言葉遣いの注意点 - 目上の人への挨拶",
    content: (
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>NG：ご苦労様です</li>
        <li>OK：お疲れ様です</li>
      </ul>
    ),
  },
  {
    title: "📨 言葉遣いの注意点 - 宛名の敬称",
    content: (
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>NG：御中（メールで）</li>
        <li>OK：貴社（メールでは書き言葉が適切）</li>
      </ul>
    ),
  },
  {
    title: "🙅‍♂️ 二重敬語の誤用",
    content: (
      <>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
          <li>「お（ご）〜なる」＋「れる（られる）」の併用はNG</li>
          <li>「謙譲語」＋「させていただく」の併用は避ける</li>
        </ul>
        <p className="font-medium text-gray-800">よくある誤用例</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>× おっしゃられた → ○ おっしゃった</li>
          <li>× お帰りになられました → ○ お帰りになりました</li>
          <li>× お見えになられました → ○ お見えになりました</li>
          <li>× お読みになられましたか？ → ○ お読みになりましたか？</li>
          <li>× 伺わせていただきます → ○ 伺います</li>
          <li>× 拝見させていただきます → ○ 拝見します</li>
          <li>× 頂戴させていただきます → ○ 頂戴します</li>
        </ul>
      </>
    ),
  },
  {
    title: "🧤 クッション言葉",
    content: (
      <>
        <p className="text-gray-700 mb-2">
          クッション言葉は、会話やメールの印象を柔らかくするための前置きです。依頼や指摘、断りの場面で効果的に使いましょう。
        </p>
        <table className="w-full text-sm text-gray-800 border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">場面</th>
              <th className="p-2 border">クッション言葉</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">依頼時</td>
              <td className="p-2 border">お忙しいところ恐れ入りますが</td>
            </tr>
            <tr>
              <td className="p-2 border">修正・改善</td>
              <td className="p-2 border">お手数をおかけし大変恐縮ですが</td>
            </tr>
            <tr>
              <td className="p-2 border">質問</td>
              <td className="p-2 border">差し支えなければ</td>
            </tr>
            <tr>
              <td className="p-2 border">断り</td>
              <td className="p-2 border">ご期待に添えず申し訳ありませんが</td>
            </tr>
            <tr>
              <td className="p-2 border">反論</td>
              <td className="p-2 border">差し出がましいようですが</td>
            </tr>
            <tr>
              <td className="p-2 border">援助</td>
              <td className="p-2 border">私でお力になれることがあれば</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: "🔄 言い換え例",
    content: (
      <table className="w-full text-sm text-gray-800 border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">カジュアル表現</th>
            <th className="p-2 border">ビジネス表現</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">すみませんが…</td>
            <td className="p-2 border">恐れ入りますが…</td>
          </tr>
          <tr>
            <td className="p-2 border">〜してください</td>
            <td className="p-2 border">〜していただけますでしょうか</td>
          </tr>
          <tr>
            <td className="p-2 border">どうしますか？</td>
            <td className="p-2 border">いかがいたしましょうか？</td>
          </tr>
          <tr>
            <td className="p-2 border">わかりました</td>
            <td className="p-2 border">承知いたしました</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

export default function CorrectSlides() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const handleBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8 flex justify-center items-center">
      <Card className="max-w-2xl w-full rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Chapter 3: 正しい敬語・言葉遣い</h1>
          <h2 className="text-lg font-semibold text-blue-600">{slides[index].title}</h2>
          <div>{slides[index].content}</div>
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handleBack} disabled={index === 0} className="bg-red-500 hover:bg-red-600 text-white  hover:text-white">
              戻る
            </Button>

            <h1>{index+1}/{slides.length}</h1>
            <Button onClick={handleNext} disabled={index === slides.length - 1} className="bg-blue-500 hover:bg-blue-600 text-white hover:text-white">
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
