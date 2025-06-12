import { Card, CardContent } from "@/components/ui/card";

export default function Manners() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 2: メールのマナー</h1>

        {/* メール送信時のマナー */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📧 メール送信時のマナー</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold text-gray-800">件名：</span>
                要件が分かりやすく、20字程度にまとめる<br />
                <span className="text-sm text-gray-500">例：【ご確認】○○について</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">添付ファイル：</span>
                添付したことを一言添える<br />
                <span className="text-sm text-gray-500">例：「○○を添付いたします。よろしくお願いいたします。」</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">送信時間：</span>
                業務時間内に送信。夜間・休日は避ける
              </li>
              <li>
                <span className="font-semibold text-gray-800">CCとBCC：</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>CC：</strong> 受信者全員にアドレスが見える</li>
                  <li><strong>BCC：</strong> 他の受信者にアドレスが表示されない</li>
                  <li><strong>ポイント：</strong> BCCを使えば個人情報保護にも配慮できる</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* メールの返信マナー */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">📩 メールの返信マナー</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold text-gray-800">返信が遅れるとき：</span>
                一言添えて相手に配慮<br />
                <span className="text-sm text-gray-500">例：「ご返信遅くなり申し訳ございません」</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">件名：</span>
                変更せず「RE:」を残すことで内容の流れが把握しやすくなる
              </li>
              <li>
                <span className="font-semibold text-gray-800">感謝の言葉：</span>
                冒頭に一言添えるだけで印象が良くなる<br />
                <span className="text-sm text-gray-500">例：「ご連絡いただきありがとうございます」</span>
              </li>
              <li>
                <span className="font-semibold text-gray-800">確認の表現：</span>
                内容確認を伝える一文を加えると丁寧<br />
                <span className="text-sm text-gray-500">例：「ご案内の件、内容を確認いたしました」</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
