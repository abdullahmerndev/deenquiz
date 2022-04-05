const Save = () => {
  return (
    <>
      <div className="save flex items-center px-4">
        <span class="material-icons text-red-300">arrow_back</span>
        <h1 className="save__title text-red-300 p-4 font-medium text-2xl capitalize">Posts you've saved</h1>
      </div>
      <div style={{borderBottom: "1px solid #1e293b", width:"100vw"}}></div>
    </>
  );
}

export default Save;
