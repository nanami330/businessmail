import { Card, CardContent } from "@/components/ui/card";

export default function Structure() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 1: メールの基本構造</h1>

        {/* 基本構造 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📌 基本構造の流れ</h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>宛先（To, Cc, Bcc）</li>
              <li>件名（要点が伝わるタイトル）</li>
              <li>添付ファイル（必要な場合）</li>
              <li>宛名（〇〇様など）</li>
              <li>挨拶と名乗り（初めての場合や丁寧に始めたい場合）</li>
              <li>本文・要旨（要点を明確に）</li>
              <li>締めの挨拶（よろしくお願いいたします など）</li>
              <li>署名（氏名・連絡先など）</li>
            </ol>
          </CardContent>
        </Card>

        {/* メール例 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📧 メールの例</h2>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm leading-relaxed text-gray-800 whitespace-pre-line">
              {`宛先: example@company.co.jp
件名: 会議日程のご相談

〇〇株式会社
△△様

お世話になっております。
株式会社サンプルの山田です。

来週予定している会議の日程についてご相談です。
以下の日程でご都合いかがでしょうか。

・4月10日（水）14:00〜
・4月11日（木）10:00〜

ご都合の良い時間帯があればお知らせください。

何卒よろしくお願いいたします。

------------------------
株式会社サンプル
営業部　山田 太郎
TEL: 03-1234-5678
Email: yamada@example.co.jp`}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
