import { Card, CardContent } from "@/components/ui/card";

export default function Template() {
  return (
    <div className="flex-[8] bg-[#f8fafc] min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Chapter 4: 状況別メールテンプレート</h1>

        {/* 初回連絡 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">📨 初めてのご挨拶</h2>
            <p className="text-gray-700 text-sm">ビジネスで初めて連絡する相手には、丁寧な自己紹介と連絡の背景を添えるのが基本です。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: はじめまして（株式会社〇〇の△△と申します）

株式会社〇〇
〇〇様

はじめまして。株式会社△△の営業部、山田太郎と申します。

この度は貴社ホームページを拝見し、ぜひ一度ご提案の機会を頂ければとご連絡いたしました。
お忙しいところ恐縮ですが、ご都合のよろしい日程をご教示いただけますと幸いです。

何卒よろしくお願いいたします。

------------------------
株式会社△△
営業部 山田 太郎
TEL: 03-xxxx-xxxx
Email: yamada@△△.co.jp`}
            </div>
          </CardContent>
        </Card>

        {/* 日程調整 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">📅 日程調整</h2>
            <p className="text-gray-700 text-sm">複数の候補を提示し、相手に選んでもらえるよう配慮しましょう。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: お打ち合わせ日程のご相談

〇〇株式会社
〇〇様

いつもお世話になっております。
株式会社△△の山田です。

お打ち合わせの日程につきまして、下記の候補の中でご都合のよい時間帯はございますでしょうか。

・5月30日（木）10:00〜
・5月30日（木）14:00〜
・5月31日（金）10:00〜

ご確認のほど、よろしくお願いいたします。`}
            </div>
          </CardContent>
        </Card>

        {/* お礼メール */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">🙏 お礼メール</h2>
            <p className="text-gray-700 text-sm">面談や対応のお礼は、できるだけ当日中に丁寧に伝えましょう。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: 本日のご面談のお礼

〇〇株式会社
〇〇様

本日はお忙しい中、お時間をいただき誠にありがとうございました。
ご提案内容についても前向きにご検討いただき、大変嬉しく思っております。

引き続き何卒よろしくお願いいたします。`}
            </div>
          </CardContent>
        </Card>

        {/* 謝罪メール */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">🙇‍♂️ 謝罪・お詫びメール</h2>
            <p className="text-gray-700 text-sm">ミスや迷惑をかけた場合は、原因と再発防止策を示した謝罪が大切です。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: 納品遅延に関するお詫び

〇〇株式会社
〇〇様

いつも大変お世話になっております。
株式会社△△の山田でございます。

この度は納品の遅延によりご迷惑をおかけし、誠に申し訳ございません。
原因は社内確認の遅れによるもので、今後は二重チェック体制を徹底いたします。

改めまして、深くお詫び申し上げます。`}
            </div>
          </CardContent>
        </Card>

        {/* 見積・提案書送付 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">📎 見積・資料の送付</h2>
            <p className="text-gray-700 text-sm">添付ファイルは明記し、資料の要点や説明も簡潔に書き添えます。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: お見積書の送付について

〇〇株式会社
〇〇様

お世話になっております。
株式会社△△の山田です。

ご依頼いただきました件につきまして、見積書を添付のとおりお送りいたします。
ご不明点などございましたら、お気軽にお問い合わせください。

何卒よろしくお願いいたします。`}
            </div>
          </CardContent>
        </Card>

        {/* 返信遅延のお詫び */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">📨 返信が遅れた場合のお詫び</h2>
            <p className="text-gray-700 text-sm">返信が遅れた際には、謝罪と対応の遅れを補う内容が重要です。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: ご返信遅れのお詫び

〇〇株式会社
〇〇様

いつも大変お世話になっております。
株式会社△△の山田です。

ご連絡をいただきながら、ご返信が遅くなりまして誠に申し訳ございません。
現在、社内にて確認中であり、明日中にはご回答申し上げます。

ご迷惑をおかけし、重ねてお詫び申し上げます。`}
            </div>
          </CardContent>
        </Card>

        {/* 年末年始の挨拶 */}
        <Card className="rounded-2xl border shadow-sm bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-600">🎍 年末年始のご挨拶</h2>
            <p className="text-gray-700 text-sm">節目のあいさつは、簡潔かつ丁寧な文面が好まれます。</p>
            <div className="bg-[#f1f5f9] p-4 rounded-lg text-sm whitespace-pre-line text-gray-800">
{`件名: 年末年始のご挨拶

〇〇株式会社
〇〇様

本年も格別のご高配を賜り、誠にありがとうございました。
来年も変わらぬご愛顧のほど、よろしくお願い申し上げます。

どうぞ良いお年をお迎えください。`}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
