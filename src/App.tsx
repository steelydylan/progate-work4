export function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl">
        <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-cyan-600">
          My App2222
        </span>
        <h1 className="mt-5 text-2xl font-bold text-slate-700">ようこそ！</h1>
        <p className="mt-3 leading-relaxed text-slate-500">
          上のタブのAIエージェントに話しかけると、
          <br />
          ここにあなたの作りたいものが表示されます。
        </p>
        <div className="mt-7 rounded-xl bg-slate-100 p-4 text-sm leading-relaxed text-slate-500">
          「◯◯◯を作って」のように、
          <br />
          作りたいと思ったものをそのまま伝えてみましょう。
        </div>
        <p className="mt-4 text-xs text-slate-400">
          何も思いつかないときは、AIチャットタブで相談してみましょう
        </p>
      </div>
    </main>
  );
}
