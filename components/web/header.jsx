import Image from "next/image";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { TopMenu } from "./topMenu";
import { MobilMenu } from "./mobilMenu";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

const Header = () => {
    return (
        <nav className="bg-white px-5 py-3 flex gap-5 flex-row justify-between items-center border-b">
            <div className="flex flex-row gap-2 lg:gap-5 items-center w-full">
                <div>
                    <Image
                        src="/img/site/logo.png"
                        alt="logo"
                        width={250}
                        height={100}
                        className="h-auto w-50 lg:w-62.5"
                    />
                </div>

                <div className="gap-3 items-center justify-center hidden lg:flex">
                    <TopMenu />
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <FaRegUser size={20}/>
                <GrCart size={20}/>
                <div className="gap-3 items-center justify-center flex lg:hidden">
                    <MobilMenu />
                </div>
            </div>
        </nav>
    )
}

export default Header;