import { Link } from 'react-router-dom';
const Index = () => {
  return (
    <>
      <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gray-600">
        <div className="w-[70%] h-[80%] flex justify-center items-center bg-no-repeat bg-[url('/img/bg-unsika.jpg')] rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl text-black">Login / Daftar</h1>
            <div className="flex flex-col gap-4 w-full">
              <input className="h-[35px] rounded-md px-2 border-none" type="email" placeholder="Exmple@gmail.com" />
              <input className="h-[35px] rounded-md px-2 border-none" type="password" placeholder="Password" />
            </div>
            <div className="flex justify-around items-center w-full">
              <Link className="bg-gray-500 text-white p-2 px-4 rounded-sm hover:bg-blue-500" to="/dashboard" type="button">
                Masuk
              </Link>
              <Link className="bg-gray-500 text-white p-2 px-4 rounded-sm hover:bg-green-500" to="/register" type="button">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
