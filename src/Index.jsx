const Index = () => {
  return (
    <>
      <div className="flex bg-red-500 w-full">
        <div className="form">
          <h1 className="text-4xl text-red-500">Login / Daftar</h1>
          <div className="input-user">
            <input type="text" />
            <input type="password" />
          </div>
          <div className="btn-proses">
            <a href="/dashboard" type="button">
              Masuk
            </a>
            <a href="/regis" type="button">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
