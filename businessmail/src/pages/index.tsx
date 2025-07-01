import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white pt-16">
      {/* === ヘッダーセクション === */}
      <header className="fixed top-0 left-0 right-0 w-full h-16 bg-white shadow-md z-50 flex items-center justify-between px-6 md:px-12">
      {/* ロゴ・教材名 */}
      <Link href="/" className="flex items-center">
        <span className="text-xl md:text-2xl font-extrabold text-blue-800">
          メールマナー完全攻略講座
        </span>
      </Link>

      {/* CTAリンク */}
      <Link href="/login">
  <button className="relative flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-sm shadow-md overflow-hidden">
    <span className="mr-3">登録済みの方はこちら</span>

    {/* 外側の丸 */}
    <span className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full">
      {/* 内側の丸（ちょっと小さめ） */}
      <span className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
        {/* 矢印 */}
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </span>
  </button>
</Link>

    </header>
<div className="w-full bg-gray-100 py-20 px-4">
  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
    {/* ===== 左側 ===== */}
    <div className="flex flex-col max-w-xl">
      <h1 className="text-4xl font-bold text-gray-600 mb-4 leading-tight">
        あなたのメール、ほんとに大丈夫？
      </h1>
      <h1 className="text-5xl font-bold text-blue-500 mb-4 leading-tight">
        メールマナー完全攻略講座
      </h1>

      {/* 受講メリット（横並び＆縦線区切り） */}
<div className="flex mt-10 mb-5 max-w-4xl rounded-lg overflow-hidden">
  <div className="flex-1 p-4 text-center">
    <h2 className="text-blue-600 font-bold mb-2 text-lg">📚 すぐに役立つ</h2>
    <p className="text-sm text-gray-700">
      明日から使えるメール例文付き。<br/>
      実践形式でスキルが身につく！
    </p>
  </div>
  <div className="border-l border-black"></div>
  <div className="flex-1 p-4 text-center">
    <h2 className="text-blue-600 font-bold mb-2 text-lg">⏱️ 短時間で完結</h2>
    <p className="text-sm text-gray-700">
      スマホでもOK！<br/>
      1回5分で効率よく学習。<br/>
      スキマ時間を有効活用。
    </p>
  </div>
  <div className="border-l border-black"></div>
  <div className="flex-1 p-4 text-center">
    <h2 className="text-blue-600 font-bold mb-2 text-lg">💯 知識を定着</h2>
    <p className="text-sm text-gray-700">
      クイズと演習問題で<br/>
      繰り返し学べる！<br/>
      テスト機能で理解度チェック。
    </p>
  </div>
</div>


      {/* CTA */}
      <Link href="/signup" legacyBehavior>
        <a className="ml-50 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md max-w-fit">
          今すぐ始める
        </a>
      </Link>
    </div>

    {/* ===== 右側画像 ===== */}
    <Image
      src="/woman.png"
      alt="メールマナー講座のイメージ"
      width={500}
      height={500}
      className="mt-10 md:mt-0 "
    />
  </div>
</div>

      {/* === メインコンテンツ === */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">

       {/* === 学習ステップ === */}
<div className="bg-blue-100 py-10 px-6 rounded-xl mb-16 text-center ">
  <h2 className="text-2xl font-bold text-blue-800 mb-8">受講の流れ</h2>
 <div className="flex flex-row justify-between items-start w-full max-w-5xl mx-auto">
    {/* STEP 1 */}
    <div className="flex-1 mx-2 bg-white p-6 rounded-lg shadow-md text-center ">
      <Image src="/step1.png" alt="STEP1" width={120} height={120} className="mx-auto"/>
      <h3 className="text-xl font-bold text-black mb-2">STEP 1</h3>
      <p className="text-black text-sm mb-2">無料登録してすぐに教材へアクセス！</p>
      <p className="text-gray-700 text-xs">メールアドレスだけでOK。面倒な設定なしですぐに始められます。</p>
    </div>
    {/* STEP 2 */}
   <div className=" flex-1 mx-2 bg-white p-6 rounded-lg shadow-md text-center ">
      <Image src="/step2.png" alt="STEP2" width={120} height={120} className="mx-auto mb-4"/>
      <h3 className="text-xl font-bold text-black mb-2">STEP 2</h3>
      <p className="text-black text-sm mb-2">クイズ＆演習問題でメールマナーを習得</p>
      <p className="text-gray-700 text-xs">例文を使って実践形式で学べるから、すぐに現場で活かせます。</p>
    </div>
    {/* STEP 3 */}
    <div className="flex-1 mx-2 bg-white p-6 rounded-lg shadow-md text-center ">
      <Image src="/step3.png" alt="STEP3" width={120} height={120} className="mx-auto mb-4"/>
      <h3 className="text-xl font-bold text-black mb-2">STEP 3</h3>
      <p className="text-black text-sm mb-2">修了テストで知識を定着！</p>
      <p className="text-gray-700 text-xs">理解度をチェックして自信を持ってメールを送れるように。</p>
    </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center">
<h2 className="bg-gradient-to-r  from-cyan-700 via-teal-600 to-blue-500 inline-block text-transparent bg-clip-text font-extrabold mb-4 text-4xl text-center leading-normal">
   はじめてでも安心！<br/>
   ステップ形式でしっかり習得。
</h2>
<div className="text-black font-medium text-sm">無理なく進める4つのチャプターで、ビジネスで役立つメールマナーを効率よく習得。

  </div>
</div>

<div className="mt-10 relative bg-blue-50 rounded-xl py-12 px-4 md:px-8">
  {/* タイムライン線 */}
  <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 z-0"></div>

  {/* マスコット画像（中央や端に配置） */}
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
    <Image src="/icon.png" alt="チャウチャウ犬" width={80} height={80} />
  </div>

  <div className="flex flex-col md:flex-row justify-between items-center relative max-w-5xl mx-auto ">
    {/* STEP 1 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0 md:w-1/4">
      <div className="bg-white border-2 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-blue-700">
        1
      </div>
      <h3 className="text-base font-bold mb-2 text-center text-gray-800">
        メールの基本構造
      </h3>
      <p className="text-xs text-gray-800 text-center">
        誰でもわかる構造の基礎を学ぶ
      </p>
    </div>

    {/* STEP 2 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0 md:w-1/4">
      <div className="bg-white border-2 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-blue-700">
        2
      </div>
      <h3 className="text-base font-bold mb-2 text-center text-gray-800">
        メールのマナー
      </h3>
      <p className="text-xs text-gray-800 text-center">
        伝わる書き方と印象アップ術
      </p>
    </div>

    {/* STEP 3 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0 md:w-1/4">
      <div className="bg-white border-2 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-blue-700">
        3
      </div>
      <h3 className="text-base font-bold mb-2 text-center text-gray-800">
        正しい言葉遣い
      </h3>
      <p className="text-xs text-gray-800 text-center">
        敬語の落とし穴をマスター
      </p>
    </div>

    {/* STEP 4 */}
    <div className="relative z-10 flex flex-col items-center md:w-1/4">
      <div className="bg-white border-2 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-blue-700">
        4
      </div>
      <h3 className="text-base font-bold mb-2 text-center text-gray-800">
        状況別テンプレ
      </h3>
      <p className="text-xs text-gray-800 text-center">
        応用編：シーン別で安心
      </p>
    </div>
  </div>
</div>


        {/* CTA */}
        <div className="mt-5 text-center">
          <Link href="/signup" legacyBehavior>
            <a className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full text-lg shadow-md">
              今すぐ始める
            </a>
          </Link>
        </div>

      </div>
    </div>
  );
}
