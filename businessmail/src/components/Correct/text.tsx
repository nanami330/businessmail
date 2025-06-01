import { Card, CardContent } from "@/components/ui/card";

export default function Correct() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 3: 正しい敬語・言葉遣い</h1>

        {/* 敬語の基本 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📝 敬語の基本</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>尊敬語：</strong> 相手の行動を高めて言う（例：言う → おっしゃる、行く → いらっしゃる）</li>
              <li><strong>謙譲語：</strong> 自分の行動をへりくだって言う（例：言う → 申し上げる、行く → 伺う）</li>
              <li><strong>丁寧語：</strong> 丁寧に述べる表現（例：です・ます・ございます）</li>
            </ul>
          </CardContent>
        </Card>

        {/* よくある間違い例 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">❌ よくある間違い</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>ご苦労様です → <span className="text-blue-600">お疲れ様です</span>（目上の人にはNG）</li>
              <li>了解しました → <span className="text-blue-600">承知しました／かしこまりました</span></li>
              <li>とんでもございません → <span className="text-blue-600">とんでもないことでございます</span></li>
              <li>参考になりました → <span className="text-blue-600">参考にさせていただきます</span></li>
            </ul>
          </CardContent>
        </Card>

        {/* 正しい言い換え例 */}
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
