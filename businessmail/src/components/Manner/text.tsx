"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "📧 メール送信時のマナー",
    content: (
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-4">
        <li>
          <span className="font-semibold text-gray-800">件名：</span>  
          要件が分かりやすく、20字程度にまとめる  
          <div className="text-sm text-gray-500">例：【ご確認】○○について</div>
        </li>
        <li>
          <span className="font-semibold text-gray-800">添付ファイル：</span>  
          添付したことを一言添える  
          <div className="text-sm text-gray-500">例：「○○を添付いたします。よろしくお願いいたします。」</div>
        </li>
        <li>
          <span className="font-semibold text-gray-800">送信時間：</span>  
          業務時間内に送信。夜間・休日は避ける
        </li>
        <li>
          <span className="font-semibold text-gray-800">CCとBCCの使い分け：</span>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>CC：</strong> 受信者全員にアドレスが見える</li>
            <li><strong>BCC：</strong> 他の受信者にアドレスが表示されない</li>
            <li><strong>ポイント：</strong> BCCを使えば個人情報保護にも配慮できる</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "📩 メールの返信マナー",
    content: (
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-4">
        <li>
          <span className="font-semibold text-gray-800">返信が遅れるとき：</span>  
          一言添えて相手に配慮する  
          <div className="text-sm text-gray-500">例：「ご返信遅くなり申し訳ございません」</div>
        </li>
        <li>
          <span className="font-semibold text-gray-800">件名の扱い：</span>  
          変更せず「RE:」を残すことで内容の流れが把握しやすくなる
        </li>
         <li>
          <span className="font-semibold text-gray-800">感謝の言葉を添える：</span>  
          冒頭に一言添えるだけで印象が良くなる  
          <div className="text-sm text-gray-500">例：「ご連絡いただきありがとうございます」</div>
        </li>
        <li>
          <span className="font-semibold text-gray-800">確認の表現を加える：</span>  
          内容確認を伝える一文を加えると丁寧  
          <div className="text-sm text-gray-500">例：「ご案内の件、内容を確認いたしました」</div>
        </li>
      </ul>
    ),
  },
  {
    title: "📌 総まとめ：メールでのマナー意識",
    content: (
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-4">
        <li>ビジネスメールは「相手への配慮」がすべての基本。</li>
        <li>送信前に「この文面で不快に思われないか？」をチェック。</li>
        <li>「丁寧＋わかりやすい」が信頼されるメールの鍵。</li>
        <li>型を覚えてから、徐々に自然な表現へ応用していこう。</li>
      </ul>
    ),
  },
];

export default function MannersSlides() {
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
          <h1 className="text-2xl font-bold text-gray-800 text-center">Chapter 2: メールのマナー</h1>
          <h2 className="text-lg font-semibold text-blue-600">{slides[index].title}</h2>
          <div>{slides[index].content}</div>
          <div className="flex justify-between pt-4 items-center">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={index === 0}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              戻る
            </Button>
            <div className="text-gray-600">{index + 1} / {slides.length}</div>
            <Button
              onClick={handleNext}
              disabled={index === slides.length - 1}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
