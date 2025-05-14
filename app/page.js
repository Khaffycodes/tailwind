import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello, Tailwind!</h1>
      <h2 className="text-2xl">Hello, Khaffy</h2>
      <h3 className="text-xl">Welcome to your class</h3>
      <p className="text-base">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <p className="text-sm">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur,{' '}
      </p>
      <p className="note text-xs">
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam nihil molestiae
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
        pariatur?"
      </p>

      {/* <h1 className="text-greeny mb-3 text-xs lg:text-3xl">Hello, Tailwind!</h1>
      <h1 className="bg-[#bada55]">Hello, Tailwind!</h1>

      <h1 className=" border-4 border-green-400">Hello, Khaffy!</h1> */}
    </div>
  );
}
