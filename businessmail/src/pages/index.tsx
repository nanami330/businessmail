import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 text-center">
          あなたのメール、ほんとに大丈夫？
        </h1>
        <p className="text-orange-500 text-center mb-4 font-semibold">
          知らないと損する！メールの基本マナー
        </p>

        <div className="text-center mb-6">
          <Link href="/material1" legacyBehavior>
            <a className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full text-lg shadow-md">
              今すぐ学ぶ
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-blue-600 font-bold mb-2">📌 教材のポイント</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>用途に応じた具体的な解説</li>
              <li>クイズや練習問題も充実</li>
              <li>短時間で学べる設計</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-blue-600 font-bold mb-2">👥 対象</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>学生</li>
              <li>新社会人</li>
              <li>メールに自信がない人</li>
            </ul>
          </div>
        </div>

        <h2 className="text-blue-700 font-semibold mt-8 mb-2 text-lg">📚 各章の内容</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-800">
          <div className="bg-sky-100 p-4 rounded-xl text-center shadow-sm">
            <p className="font-bold mb-1">第1章 クイズ</p>
            <p>基本の理解度チェック</p>
          </div>
          <div className="bg-sky-100 p-4 rounded-xl text-center shadow-sm">
            <p className="font-bold mb-1">第2章 練習問題</p>
            <p>フレーズや敬語の実践</p>
          </div>
          <div className="bg-sky-100 p-4 rounded-xl text-center shadow-sm">
            <p className="font-bold mb-1">第3章 クイズ</p>
            <p>応用メールのチェック</p>
          </div>
          <div className="bg-sky-100 p-4 rounded-xl text-center shadow-sm">
            <p className="font-bold mb-1">第4章 練習問題</p>
            <p>件名・署名・宛名の実践</p>
          </div>
        </div>
      </div>
    </div>
  );
}
