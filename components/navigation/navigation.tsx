import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
  return (

    <div className="sticky top-0 z-[999] left-0 right-0 bg-white border-b bg-opacity-50 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link className="text-lg font-bold" href=" /">Explorer</Link>

          <nav>

            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/poland">Poland</Link>
              </li>
              <li>
                <Link href="/slovakia">Slovakia</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer >
    </div >

  );
};

export default Navigation;
