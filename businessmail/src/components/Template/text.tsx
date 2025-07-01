"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "🙏 お礼メール",
    description:
      "お礼メールは、相手の対応や協力に感謝を伝えるメールです。  \nできるだけ早めに送り、感謝の気持ちを具体的に伝えることがポイントです。",
    example: `件名：お打ち合わせありがとうございました  
〇〇様  

いつもお世話になっております。  
△△株式会社の山田です。  

本日はお忙しい中、お時間をいただき誠にありがとうございました。  
ご説明いただいた内容を踏まえ、今後の対応を検討いたします。  

引き続きよろしくお願いいたします。  
`,
  },
  {
    title: "📩 依頼メール",
    description:
      "依頼メールは、相手に何かをお願いする際に使います。  \n用件を簡潔にまとめ、相手の負担を配慮した表現が大切です。",
    example: `件名：資料送付のお願い  
〇〇様  

いつもお世話になっております。  
△△株式会社の山田です。  

恐れ入りますが、先日ご案内いただいた資料をお送りいただけますでしょうか。  
お忙しいところ恐縮ですが、よろしくお願いいたします。  
`,
  },
  {
    title: "🙏 謝罪メール",
    description:
      "謝罪メールは、ミスやトラブルがあった際に送ります。  \nまずは謝罪し、原因と今後の対応を明確に伝えることが重要です。",
    example: `件名：納期遅延のお詫び  
〇〇様  

いつもお世話になっております。  
△△株式会社の山田です。  

この度は納期が遅れ、ご迷惑をおかけし誠に申し訳ございません。  
現在、原因を調査し、再発防止に努めております。  
何卒ご理解のほどよろしくお願いいたします。  
`,
  },
  {
    title: "📅 日程調整メール",
    description:
      "打ち合わせなどの日程を調整するメールです。  \n候補日時を複数提示し、相手が選びやすいように配慮しましょう。",
    example: `件名：打ち合わせ日程のご相談  
〇〇様  

いつもお世話になっております。  
△△株式会社の山田です。  

下記の日程で打ち合わせをお願いしたく存じます。  
ご都合の良い日時をお知らせいただけますでしょうか。  

・7月1日（水）14:00〜16:00  
・7月2日（木）10:00〜12:00  
・7月3日（金）13:00〜15:00  

お忙しいところ恐れ入りますが、よろしくお願いいたします。  
`,
  },
  {
    title: "👋 初回挨拶メール",
    description:
      "初めて取引先や担当者に連絡する際のメールです。  \n自己紹介と今後の意気込みを簡潔に伝えましょう。",
    example: `件名：初めまして、△△株式会社の山田です  
〇〇様  

はじめまして。  
△△株式会社の山田と申します。  

今後の案件でご一緒させていただくことになりました。  
何卒よろしくお願いいたします。  
`,
  },
];

export default function TemplateSlides() {
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
            <h1 className="text-2xl font-bold text-gray-800 text-center">Chapter 4: 状況別テンプレ</h1>
            <h2 className="text-lg font-semibold text-blue-600">{slides[index].title}</h2>
            <div>{slides[index].description}</div>
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
