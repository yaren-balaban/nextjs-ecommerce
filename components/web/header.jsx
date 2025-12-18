import Image from "next/image";
import Link from "next/link";
import { IoPerson, IoCart } from "react-icons/io5";
import { TopMenu } from "./topMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <nav className="bg-white px-5 py-3 flex flex-col gap-5 lg:flex-row justify-between items-center border-b">
            <div className="flex flex-col lg:flex-row gap-5 items-center">
                <div>
                    <Image
                        src="/img/site/logo.png"
                        alt="logo"
                        width={250}
                        height={100}
                        className="h-auto"
                    />
                </div>

                <div className="gap-3 items-center justify-center hidden lg:flex">
                    <TopMenu />
                </div>

                <div className="gap-3 items-center justify-center flex lg:hidden">
                    <GiHamburgerMenu size={20}/>
                </div>
            </div>

            <div className="flex gap-3 items-center">
                <IoPerson size={20}/>
                <IoCart size={20}/>
            </div>
        </nav>
    )
}

export default Header;