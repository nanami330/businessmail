"use client";

import { useUser } from "@supabase/auth-helpers-react";
import { Menu } from "@headlessui/react";
import { UserCircle2, LogOut } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  const user = useUser();

  // ユーザー名（フルネームか未設定なら空文字）
  const userName = user?.email?.split("@")[0] ?? "ユーザー";

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 bg-white border-b shadow-sm z-50 flex items-center justify-between px-4 sm:px-6">
      {/* 左ロゴ */}
       <h1 className="text-stone-500 font-bold">{userName}さん、ようこそ！</h1>
      <div className="flex items-center">
       <Image
          src="/icon.png"
          width={48}
          height={24}
          alt="ちゃうちゃうlab"
          className="block"
        />
        <h1 className="font-semibold text-lg sm:text-xl text-blue-500 select-none">
          Businessmail
        </h1>
        </div>
        

      {/* 右：ユーザー */}
      <Menu as="div" className="relative flex items-center gap-3">

        <Menu.Button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
          <UserCircle2 className="w-7 h-7 text-gray-500" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-36 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-2 z-50">
          {user ? (
            <>
              <div className="text-sm">
                <p className="font-semibold truncate">{"ユーザー"}</p>
                <p className="text-gray-500 text-xs truncate">{user.email}</p>
              </div>
              <hr className="border-gray-200" />
              <button
                className="text-sm text-red-500 hover:text-red-600 flex items-center gap-2"
                onClick={async () => {
                  const { supabase } = await import("@/lib/supabaseClient");
                  await supabase.auth.signOut();
                  window.location.href = "/";
                }}
              >
                <LogOut className="w-4 h-4" />
                ログアウト
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">ログインしていません</p>
          )}
        </Menu.Items>
      </Menu>
    </header>
  );
}
