export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-5/6 max-w-3xl px-2 py-4 bg-white rounded-3xl bg-opacity-25 drop-shadow-2xl">
        <h1 className="px-2 py-2 mx-4 text-lg text-slate-700">Search for a series...</h1>
        <textarea className="m-1 rounded-xl w-11/12 self-center resize-none"></textarea>
      </div>
    </div>
    
  );
}
