import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      const userId = data.user?.id;
    if (userId) {
      const { error: sessionError } = await supabase
        .from('study_sessions')
        .insert([
          {
            user_id: userId,
            started_at: new Date(),
          },
        ]);

      if (sessionError) {
        console.error("学習セッションの記録に失敗:", sessionError.message);
      }
    }
      router.push('/Material1/Text');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
          ログイン
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-gray-400 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          />

          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-gray-400 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-lg shadow-md"
          >
            ログイン
          </button>
        </form>

        {errorMsg && (
          <p className="text-red-500 text-sm mt-4 text-center">{errorMsg}</p>
        )}

        <p className="text-gray-600 text-sm mt-4 text-center">
          アカウントをお持ちでない方は{' '}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => router.push('/signup')}
          >
            新規登録
          </span>
        </p>
      </div>
    </div>
  );
}
