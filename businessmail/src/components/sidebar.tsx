"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Handshake, Quote, LayoutTemplate, HelpCircle, ListChecks, HomeIcon } from "lucide-react";

const links = [
  {
    href: "/Material1",
    label: "メールの基本構造",
    icon: <Mail size={22} />,
    tooltips: [
      { label: "教材", href: "/Material1/Text" },
      { label: "確認テスト", href: "/Material1/Test" },
    ],
  },
  {
    href: "/Material2",
    label: "メールのマナー",
    icon: <Handshake size={22} />,
    tooltips: [
      { label: "教材", href: "/Material2/Text" },
      { label: "確認テスト", href: "/Material2/Test" },
    ],
  },
  {
    href: "/Material3",
    label: "正しい言葉遣い",
    icon: <Quote size={22} />,
    tooltips: [
      { label: "教材", href: "/Material3/Text" },
      { label: "確認テスト", href: "/Material3/Test" },
    ],
  },
  {
    href: "/Material4",
    label: "状況別テンプレ",
    icon: <LayoutTemplate size={22} />,
    tooltips: [
      { label: "教材", href: "/Material4/Text" },
      { label: "確認テスト", href: "/Material4/Test" },
    ],
  },
];

const quizeLink = { href: "/quize", label: "総合テスト", icon: <ListChecks size={22} /> };
const homeLink = { href: "/", label: "ホーム", icon: <HomeIcon size={22} /> };

export default function Sidebar() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#f8fafc] border-r px-4 py-6 z-50 flex flex-col justify-start overflow-y-auto">
      <nav>
        <ul className="space-y-1">
          {links.map(({ href, label, icon, tooltips }, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={href}>
                {/* メイン項目 */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-800 hover:bg-[#e0ebf5] hover:shadow-md transition-all"
                >
                  <span className="text-blue-600">{icon}</span>
                  <span className="text-base font-medium">{label}</span>
                </button>

                {/* 展開するバナー（下に自然に出現） */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-2 px-6 py-2">
                    {tooltips.map(({ label: tipLabel, href: tipHref }) => (
                      <Link
                        key={tipHref}
                        href={tipHref}
                        className="block bg-blue-100 text-blue-900 text-sm px-3 py-2 rounded hover:bg-blue-200 transition"
                      >
                        {tipLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 総合テストボタン */}
      <div className="mt-3 bg-white border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
 <Link
  href={quizeLink.href}
  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all font-semibold justify-center"
>
  {quizeLink.icon}
  <span className="text-base">総合テスト</span>
  
</Link>

</div>


      {/* ホームボタン */}
      <div className="mt-48">
        <Link
          href={homeLink.href}
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-lg transition-all font-semibold justify-center"
        >
          {homeLink.icon}
          <span className="text-base">{homeLink.label}</span>
        </Link>
      </div>
    </aside>
  );
}
