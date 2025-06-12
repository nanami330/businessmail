import { supabase } from "../lib/supabaseClient";

export async function saveTestResult(chapter: string, score: number): Promise<{ success: boolean; error?: Error }> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { success: false, error: new Error("ユーザー取得失敗") };
  }

  const { error } = await supabase.from("test_results").insert([
    {
      user_id: user.id,
      chapter,
      score,
    },
  ]);

  if (error) {
    return { success: false, error };
  }

  return { success: true };
}
