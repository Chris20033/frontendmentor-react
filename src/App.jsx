import CrossIcon from "./Components/icons/CrossIcon";
import Moon from "./Components/icons/Moon";

const App = () => {
  return (
    <div className="bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-3xl text-white font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button><Moon fill="#FFF"/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden flex gap-5 items-center py-4 pl-5">
          <span className=" rounded-full border-2 inline-block h-4.5 w-5"></span>
          <input
            className="py-1 w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white px-4 [&>article]:p-4">
          <article className="bg-white flex justify-around border-b-1 border-gray-300 p-3 items-center gap-4">
            <button className=" rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-400 grow line-through">
              Complete online JS Course
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <article className="bg-white flex justify-around border-b-1 border-gray-300 p-3 items-center gap-4">
            <button className=" rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-black grow ">Complete online JS Course</p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <article className="bg-white flex justify-around border-b-1 border-gray-300 p-3 items-center gap-4">
            <button className=" rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-black grow ">Complete online JS Course</p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <article className="bg-white flex justify-around border-b-1 border-gray-300 p-3 items-center gap-4">
            <button className=" rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-black grow ">Complete online JS Course</p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <article className="bg-white flex justify-around border-b-1 border-gray-300 p-3 items-center gap-4">
            <button className=" rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-black grow ">Complete online JS Course</p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between p-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Complete</button>
          </section>
        </div>

       
      </main>

      <section className="container mx-auto  mt-8">
        <div className="bg-white rounded-md p-4 mt-6 flex justify-evenly">
          <button className="text-blue-600">All</button>
          <button className="hover: text-blue-600">Active</button>
          <button className="hover: text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8">Drag and drop</section>
      
    </div>
  );
};

export default App;
