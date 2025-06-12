// lib/getTestResult.ts
import { supabase } from "./supabaseClient"; // Supabase初期化済みクライアント

export const getTestResult = async (chapter: string, userId: string) => {
  const { data, error } = await supabase
    .from("test_results")
    .select("score")
    .eq("chapter", chapter)
    .eq("user_id", userId)
    .single();

  if (error) {
    return { success: false, error };
  }

  return { success: true, score: data?.score };
};
