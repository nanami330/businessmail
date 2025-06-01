import { Card, CardContent } from "@/components/ui/card";

export default function Manners() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 2: メールのマナー</h1>

        {/* 敬語・言葉遣い */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">🗣 言葉遣いと敬語の配慮</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>丁寧な敬語を使う（です・ます調）</li>
              <li>命令口調を避け、依頼形にする（〜してください → お願いできますでしょうか）</li>
              <li>社外メールでは「御社」「貴社」「弊社」などの区別に注意</li>
              <li>ネガティブな表現を避け、前向きな言い換えを心がける</li>
            </ul>
          </CardContent>
        </Card>

        {/* 時間帯や返信タイミング */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">⏰ メールの送信時間と返信マナー</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>深夜・早朝の送信は避け、業務時間内に送信</li>
              <li>受信後はなるべく早く返信（遅れる場合は一報を）</li>
              <li>休暇中などは自動返信設定で対応</li>
              <li>緊急時は電話など他の手段を検討</li>
            </ul>
          </CardContent>
        </Card>

        {/* 添付・CC/BCCのマナー */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📎 添付ファイル・CC/BCC の使い方</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>添付ファイルには必ず一言添える（「資料を添付いたします」など）</li>
              <li>ファイル名は内容が分かるように（例: "見積書_株式会社〇〇.pdf"）</li>
              <li>CCは「情報共有」、BCCは「関係者に知られず送信」に使用</li>
              <li>誤送信防止のため送信前にアドレスと添付を必ず確認</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
