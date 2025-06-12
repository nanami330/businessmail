// utils/testResults.ts
import { supabase } from "../lib/supabaseClient";

export async function getTestResult(chapter: string) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("ユーザー取得失敗");
  }

  const { data, error } = await supabase
    .from("test_results")
    .select("*")
    .eq("user_id", user.id)
    .eq("chapter", chapter)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}
