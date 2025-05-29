"use client";

import Link from "next/link";
import { Mail, Handshake, Quote, LayoutTemplate, HelpCircle, HomeIcon } from "lucide-react";

const links = [
  { href: "/material1", label: "メールの基本構造", icon: <Mail size={22} /> },
  { href: "/material2", label: "メールのマナー", icon: <Handshake size={22} /> },
  { href: "/material3", label: "正しい言葉遣い", icon: <Quote size={22} /> },
  { href: "/material4", label: "状況別テンプレ", icon: <LayoutTemplate size={22} /> },
  { href: "/quize", label: "クイズ", icon: <HelpCircle size={22} /> },
];

const homeLink = { href: "/", label: "ホーム", icon: <HomeIcon size={22} /> };

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#f8fafc] border-r px-4 py-6 z-50 flex flex-col justify-between">
      <nav>
        <ul className="space-y-2">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-800 hover:bg-[#e0ebf5] hover:shadow-md transition-all"
              >
                <span className="text-blue-600">{icon}</span>
                <span className="text-base font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-4">
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
