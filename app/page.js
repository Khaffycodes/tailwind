import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className="parent">
        <div className="bg-red-500 ">Header</div>
        <div className="flex justify-center">
          <div className=" bg-green-500 ">
            <h1>Sidebar</h1>
            <p>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat
            </p>
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
          <div className=" bg-blue-500 ">
            <h1>Another Sidebar</h1>
            <p>
              {' '}
              enim ad minim veniam, nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
          </div>
          {/* <div className="w-1/4 bg-green-500 ">Sidebar</div>
          <div className="w-full bg-blue-500 ">Main Content</div>*/}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-wrap">
            <div className="w-full grow">01</div>
            <div className="w-full grow ">02</div>
            <div className="w-full grow">03</div>
            <div className="w-full grow ">04</div>
            <div className="w-full grow">05</div>
          </div>
        </div>
      </div>

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
