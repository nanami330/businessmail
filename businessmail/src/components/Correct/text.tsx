import { Card, CardContent } from "@/components/ui/card";

export default function Correct() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 3: 正しい敬語・言葉遣い</h1>

        {/* 言葉遣いの注意点 */}
       {/* 言葉遣いの注意点 */}
<Card className="rounded-2xl border shadow-sm bg-white">
  <CardContent className="p-6 space-y-4">
    <h2 className="text-xl font-semibold text-blue-600">⚠️ 言葉遣いの注意点</h2>
    <div className="space-y-3 text-gray-700">
      <div>
        <p className="font-medium text-gray-800">📧 初めてのメール</p>
        <ul className="list-disc list-inside ml-4">
          <li>NG：お世話になっております</li>
          <li>OK：初めてメールにてご連絡申し上げます</li>
          <li>※「はじめまして」は口語表現のため、ビジネスメールでは避ける</li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-gray-800">🙇‍♀️ 目上の人への挨拶</p>
        <ul className="list-disc list-inside ml-4">
          <li>NG：ご苦労様です</li>
          <li>OK：お疲れ様です</li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-gray-800">📨 宛名の敬称</p>
        <ul className="list-disc list-inside ml-4">
          <li>NG：御中（メールで）</li>
          <li>OK：貴社（メールでは書き言葉が適切）</li>
        </ul>
      </div>
    </div>
  </CardContent>
</Card>

        {/* 二重敬語 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">🙅‍♂️ 二重敬語の誤用</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>「お（ご）〜なる」＋「れる（られる）」の併用はNG</li>
              <li>「謙譲語」＋「させていただく」の併用は避ける</li>
            </ul>
            <h3 className="font-medium text-gray-800">よくある誤用例</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>× おっしゃられた → ○ おっしゃった</li>
              <li>× お帰りになられました → ○ お帰りになりました</li>
              <li>× お見えになられました → ○ お見えになりました</li>
              <li>× お読みになられましたか？ → ○ お読みになりましたか？</li>
              <li>× 伺わせていただきます → ○ 伺います</li>
              <li>× 拝見させていただきます → ○ 拝見します</li>
              <li>× 頂戴させていただきます → ○ 頂戴します</li>
            </ul>
          </CardContent>
        </Card>

        {/* クッション言葉 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">🧤 クッション言葉</h2>
            <p className="text-gray-700">
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
          </CardContent>
        </Card>

        {/* 言い換え例 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">🔄 言い換え例</h2>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
