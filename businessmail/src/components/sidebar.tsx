"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Handshake,
  Quote,
  LayoutTemplate,
  ListChecks,
  HomeIcon,
} from "lucide-react";
import { useUser } from "@supabase/auth-helpers-react";
import { getTestResult } from "@/lib/getTestResult";

// 各章の問題数（満点判定に使用）
const chapterQuestionsCount: Record<string, number> = {
  "Chapter1": 5,
  "Chapter2": 5,
  "Chapter3": 5,
  "Chapter4": 5,
};

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [perfectChapters, setPerfectChapters] = useState<Record<string, boolean>>({});
  const user = useUser();

  const links = [
    {
      id: "Chapter1",
      href: "/Material1",
      label: "メールの基本構造",
      icon: <Mail size={22} />,
      tooltips: [
        { label: "教材", href: "/Material1/Text" },
        { label: "確認テスト", href: "/Material1/Test" },
      ],
    },
    {
      id: "Chapter2",
      href: "/Material2",
      label: "メールのマナー",
      icon: <Handshake size={22} />,
      tooltips: [
        { label: "教材", href: "/Material2/Text" },
        { label: "確認テスト", href: "/Material2/Test" },
      ],
    },
    {
      id: "Chapter3",
      href: "/Material3",
      label: "正しい言葉遣い",
      icon: <Quote size={22} />,
      tooltips: [
        { label: "教材", href: "/Material3/Text" },
        { label: "確認テスト", href: "/Material3/Test" },
      ],
    },
    {
      id: "Chapter4",
      href: "/Material4",
      label: "状況別テンプレ",
      icon: <LayoutTemplate size={22} />,
      tooltips: [
        { label: "教材", href: "/Material4/Text" },
        { label: "確認テスト", href: "/Material4/Test" },
      ],
    },
  ];

  useEffect(() => {
    console.log("useEffect run, user:", user);
    if (!user) return;

    const fetchPerfectScores = async () => {
      const status: Record<string, boolean> = {};

      for (const chapter of Object.keys(chapterQuestionsCount)) {
        const result = await getTestResult(chapter, user.id);
        if (result.success && result.score === chapterQuestionsCount[chapter]) {
          status[chapter] = true;
        }
      }

      setPerfectChapters(status);
      console.log(perfectChapters);
    };

    fetchPerfectScores();
  }, [user]);

  const quizeLink = {
    href: "/quize",
    label: "総合テスト",
    icon: <ListChecks size={22} />,
  };
  const homeLink = {
    href: "/",
    label: "ホーム",
    icon: <HomeIcon size={22} />,
  };

  return (
   <aside className="fixed top-16 left-0 w-64 h-screen bg-[#f8fafc] border-r px-4 py-6 z-50 flex flex-col justify-between overflow-y-auto">
  {/* 上部: ナビゲーション */}
  <nav>
    <ul className="space-y-1">
      {links.map(({ id, href, label, icon, tooltips }, index) => {
        const isOpen = openIndex === index;

        return (
          <li key={href}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-800 hover:bg-[#e0ebf5] hover:shadow-md transition-all"
            >
              <span className="text-blue-600">{icon}</span>
              <span className="text-base font-medium">{label}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-2 px-6 py-2">
                {tooltips.map(({ label: tipLabel, href: tipHref }) => {
                  const isTestLink = tipLabel.includes("確認テスト");
                  const showCheck = isTestLink && perfectChapters[id] === true;

                  return (
                    <Link
                      key={tipHref}
                      href={tipHref}
                      className="block bg-blue-100 text-blue-900 text-sm px-3 py-2 rounded hover:bg-blue-200 transition"
                    >
                      {tipLabel} {showCheck ? "✅" : ""}
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </nav>

  {/* 下部: テストボタン & ホームボタン */}
  <div className="mt-2">
    {/* 総合テストボタン */}
    <div className="bg-white border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition mb-18">
      <Link
        href={quizeLink.href}
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all font-semibold justify-center"
      >
        {quizeLink.icon}
        <span className="text-base">{quizeLink.label}</span>
      </Link>
    </div>

  </div>
</aside>

  );
}
