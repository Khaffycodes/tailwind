import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1>This is a title</h1>
      <h2 className="mb-1 text-xl font-semibold">This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a>This is an anchor</a>
      <div>
        <button>This is a button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Checkbox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h1>This is a title</h1>
      <h2 className="mb-1 text-xl font-semibold">This is a subtitle</h2>

      {/* <div className=" h-screen  text-black Parent">
        <div className="block p-4 text-black bg-white rounded-lg shadow-md">
          <img
            className="skew-y-2 w-6 h-6 blur-sm hover:blur-none brightness-50 "
            src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg"
          />
          <h1 className="text-2xl opacity-45">Hello</h1>
          <p className="text-xl">My name is Khaffy</p>
          <button className=" transition ease-in hover:translate-x-2 delay-100 mt-3 px-2 py-1 bg-teal-400 shadow-md shadow-teal-400/50 text-white rounded-lg">
            Click me
          </button>
          <button className="block px-2 py-1 rounded-lg mt-3 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
            Save Changes
          </button>
        </div>
        <div className="mt-1 w-full border-2">Header</div>
        <br></br>
        <br></br>
        <div className="divide-red-500 divide-y-2">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <br></br>
        <br></br>
        <input
          type="text"
          className="rounded-lg border-2 border-rose-700 focus:border-green-200 outline-none"
        />
      </div> */}

      {/* <div>
        <span class="box-decoration-slice bg-purple-300 px-2 text-white ...">
          Hello
          <br />
          World
        </span>
        <span class="box-decoration-clone bg-pink-500 px-2 text-white ...">
          Hello
          <br />
          World
        </span>
      </div> */}
      {/*<div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-inside-auto">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div class="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p class="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div> */}
      {/* <div className="h-screen Parent bg-blue-500 text-white">
        <div className="container ">
          <img
            className="w-6 h-6 object-none object-center"
            src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg"
          />
        </div>
      </div> */}

      {/* <div className="container flex bg-slate-500">
        <div className="p-3 z-40 bg-purple-500 border-white rounded-full">
          05
        </div>
        <div className="p-3 z-30 bg-purple-500 border-white rounded-full">
          04
        </div>
        <div className="p-3 z-20 bg-purple-500 border-white rounded-full">
          03
        </div>
        <div className="p-3 z-10 bg-purple-500 border-white rounded-full">
          02
        </div>
        <div className="p-3 z-0 bg-purple-500 border-white rounded-full">
          01
        </div>
      </div>*/}
      {/* <div className="grid grid-cols-3 gap-4"> 
        <div className="bg-teal-400">01</div>
        <div className="bg-teal-400 invisible">02</div>
        <div className="bg-teal-400">03</div>
      </div>
      <div className="h-screen text-white Parent bg-slate-900 ">
        <div className="container px-2 ">
          <div className="relative w-6 h-6 bg-red-600 rounded-lg">
            <div className=" absolute inset-2 w-3 h-3 bg-green-600 rounded-lg"></div>
          </div>
        </div>
      </div> */}
      {/* <div className=" text-white Parent bg-slate-900 ">
        <div className="container px-2 ">
          <img
            className="block float-left w-1/3"
            src="https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg"
          />
          <img
            className="block float-right w-1/4"
            src="https://img.freepik.com/free-photo/full-shot-family-running-
            meadow_23-2149049202.jpg?t=st=1747327631~exp=1747331231~hmac=fbb545013b70ffe473a
            b3e76cecce1353551d40d1e190d381de64f3cfb378620"
            alt="A family running"
          />

          <p className="clear-both">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </div>
      </div>
      <div className="h-screen text-white parent bg-white">
        <div className="container mx-auto">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
            <div className="col-span-2 p-3 rounded-lg bg-sky-400">
              First row
            </div>
            <div className="col-span-2 p-3 rounded-lg bg-sky-400">
              Second row
            </div>
            <div className="p-3 rounded-lg bg-sky-400">Third row</div>
            <div className="p-3 rounded-lg bg-yellow-400 ">Fourth row</div>
            <div className="p-3 rounded-lg bg-sky-400">Fifth row</div>
            <div className="col-span-2 p-3 rounded-lg bg-sky-400">
              Sixth row
            </div>
            <div className="p-3 rounded-lg bg-sky-400">7th row</div>
            <div className="p-3 rounded-lg bg-yellow-400 ">8th row</div>
            <div className="p-3 rounded-lg bg-sky-400">9th row</div>
            <div className="col-span-2 p-3 rounded-lg bg-sky-400">10th row</div>
            <div className=" p-3 rounded-lg bg-sky-400">11th row</div>
            <div className="p-3 rounded-lg bg-sky-400">12th row</div>
          </div>
        </div>
      </div>
      <div className="h-screen text-white parent bg-white">
        <div className="container mx-auto">
          <div className="grid grid-flow-col gap-2 lg:grid-cols-4 ">
            <div className=" col-span-4 col-start-2 p-3 rounded-lg bg-sky-400">
              First column
            </div>
            <div className=" col-start-1  col-end-3 p-3 rounded-lg bg-sky-400">
              Second column
            </div>
            <div className=" col-span-2  col-end-7 p-3 rounded-lg bg-sky-400">
              Third column
            </div>
            <div className=" col-start-1  col-end-7 p-3 rounded-lg bg-yellow-400 col-span-2">
              Fourth column
            </div>
            <div className="p-3 rounded-lg bg-sky-400">Fifth column</div>
            <div className="p-3 rounded-lg bg-sky-400">Sixth column</div>
          </div>
        </div>
      </div>
      <div className="h-screen text-white parent bg-white">
        <div className="container mx-auto">
          <div className="grid grid-flow-col gap-2 lg:grid-rows-4 ">
            <div className="row-span-3  p-3 rounded-lg bg-sky-400">
              First row
            </div>
            <div className=" p-3 rounded-lg bg-sky-400">Second row</div>
            <div className=" p-3 rounded-lg bg-sky-400">Third row</div>
            <div className="  p-3 rounded-lg bg-yellow-400 ">Fourth row</div>
            <div className=" row-span-2 p-3 rounded-lg bg-sky-400">
              Fifth row
            </div>
            <div className="p-3 rounded-lg bg-sky-400">Sixth row</div>
            <div className=" p-3 rounded-lg bg-sky-400">7th row</div>
            <div className=" row-span-2 p-3 rounded-lg bg-yellow-400 ">
              8th row
            </div>
            <div className="  p-3 rounded-lg bg-sky-400">9th row</div>
            <div className="p-3 rounded-lg bg-sky-400">10th row</div>
          </div>
        </div>
      </div>
      <div className="h-screen text-white parent bg-white">
        <div className="container mx-auto">
          <div className="grid grid-flow-col gap-2 lg:grid-cols-4 ">
            <div className=" col-span-4 col-start-2 p-3 rounded-lg bg-sky-400">
              First column
            </div>
            <div className=" col-start-1  col-end-3 p-3 rounded-lg bg-sky-400">
              Second column
            </div>
            <div className=" col-span-2  col-end-7 p-3 rounded-lg bg-sky-400">
              Third column
            </div>
            <div className=" col-start-1  col-end-7 p-3 rounded-lg bg-yellow-400 col-span-2">
              Fourth column
            </div>
            <div className="p-3 rounded-lg bg-sky-400">Fifth column</div>
            <div className="p-3 rounded-lg bg-sky-400">Sixth column</div>
          </div>
        </div>
      </div>
      <div className="h-screen text-white parent bg-slate-600">
        <div className="container mx-auto">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="p-3 rounded-lg bg-sky-400">First column</div>
            <div className="p-3 rounded-lg bg-sky-400">Second column</div>
            <div className="p-3 rounded-lg bg-sky-400">Third column</div>
            <div className="p-3 rounded-lg bg-yellow-400 col-span-2">
              Fourth column
            </div>
            <div className="p-3 rounded-lg bg-sky-400">Fifth column</div>
            <div className="p-3 rounded-lg bg-sky-400">Sixth column</div>
          </div>
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="bg-slate-500 pt-2 pb-6">01</div>
        <div className="bg-orange-400 pt-8 pb-12">02</div>
        <div className="bg-blue-300 pt-12 pb-4">03</div>
      </div>
      <div className="bg-red-500 ">Header</div>
      <div className="parent">
        <div className="flex items-center justify-evenly">
          <div className=" bg-green-500 ">
            <h1>Sidebar</h1>
          </div>
          <div className=" bg-blue-500 ">
            <h1>Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
          </div>
          <div className=" bg-yellow-500 ">
            <h1>Another Sidebar</h1>
          </div>
          {/* <div className="w-1/4 bg-green-500 ">Sidebar</div>
          <div className="w-full bg-blue-500 ">Main Content</div>
        </div>*/}
      {/* <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-wrap">
            <div className="w-full grow">01</div>
            <div className="w-full grow ">02</div>
            <div className="w-full grow">03</div>
            <div className="w-full grow ">04</div>
            <div className="w-full grow">05</div>
          </div>
        </div>
      </div>  */}

      {/* <div className="flex min-h-screen space-y-4">
        <div className="w-1/4   bg-purple-800 ">Sidebar</div>
        <div className=" w-4/5  bg-pink-800 ">Main-content</div>
      </div>

      <div className="h-6 w-36 bg-blue-800 opacity-40 mt-4"></div>
      <div className=" bg-red-300 -mt-4 ">-mt-8</div>
      <h1 className="text-3xl font-bold mb-2">This is a title</h1>
      <p className="capitalize text-xl">Welcome to your class</p>
      <div className="font-bold text-white m-4 bg-blue-500 py-1">
        box with margin
      </div>
      <div className="text-3xl bg-slate-500 p-4">box with padding</div>
      <h1 className="text-3xl mt-1">Hello, Tailwind!</h1>
      <h2 className="text-2xl underline decoration-wavy decoration-2 decoration-red-600 underline-offset-4">
        Hello, Khaffy
      </h2>
      <h3 className="capitalize text-xl">Welcome to your class</h3>
      <p className="uppercase mb-4 text-base underline decoration-wavy underline-offset-4 leading-loose">
        a regular paragraph
      </p>
      <div className="break-all">
        <p className="text-base mb-4  italic underline decoration-purple-500 decoration-1">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor pneumonoultramicroscopicsilicovolcanoconiosis
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
      <p className="text-sm mb-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur
      </p>

      <p className="note text-xs">
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam nihil molestiae
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        pariatur?"
      </p> */}

      {/* <h1 className="text-greeny mb-3 text-xs lg:text-3xl">Hello, Tailwind!</h1>
      <h1 className="bg-[#bada55]">Hello, Tailwind!</h1>

      <h1 className=" border-4 border-green-400">Hello, Khaffy!</h1> */}
    </div>
  );
}
