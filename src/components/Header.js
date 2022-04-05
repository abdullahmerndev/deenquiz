const Header = () => {
  return (
    <header className="App__header bg-slate-200 flex items-center justify-between">
      <a href="/"><h1 className="text-2xl font-bold text-slate-700 p-4"><span className="text-green-500">deen</span> quiz</h1></a>
      <div className="menu-wrapper flex flex-col mr-6 rotate-180">
        <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700"></div>
      </div>
    </header>
  );
}

export default Header;
