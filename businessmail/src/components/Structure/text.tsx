import { Card, CardContent } from "@/components/ui/card";

export default function Template() {
  return (
    <div className="flex-[8] bg-[#f1f5f9] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">
          Chapter 1: メール基本構造
        </h1>

        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📧 メール構成テンプレート</h2>
            <p className="text-gray-700 text-sm">
              以下はビジネスメールの基本構成です。用途に応じて文章を調整してください。
            </p>

            <div className="bg-[#f8fafc] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`① 宛先：xxx.aaa@co.jp
② 件名：[○○] ～について
③ 添付：資料.zip

──────────────────────

④ 宛名：
〇〇株式会社
〇〇部
〇〇様

⑤ 挨拶と名乗り：
いつもお世話になっております。
株式会社△△の〇〇部、山田と申します。

⑥ 本文（要点）：
先日ご依頼いただいた件につきまして、以下の通りご連絡いたします。
（または）ご提案書を添付いたしましたので、ご確認のほどお願いいたします。

⑦ 結びの言葉：
お忙しいところ恐れ入りますが、ご確認のほどよろしくお願いいたします。
今後ともどうぞよろしくお願い申し上げます。

──────────────────────

⑧ 署名：
株式会社△△
営業部 山田 太郎
住所：〒123-4567 ○○県○○市○○
TEL：03-xxxx-xxxx
FAX：03-xxxx-xxxx
MAIL：yamada@△△.co.jp`}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
