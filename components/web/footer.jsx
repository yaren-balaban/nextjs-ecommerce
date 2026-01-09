import Image from "next/image";

const Footer = () => {
    return(
        <div className="flex flex-col">
            <div className="w-full items-center justify-center flex">
                <Image
                    src="/img/site/logo.png"
                    alt="logo"
                    width={200}
                    height={100}
                />
            </div>

            <div>
                Menüler gelcek
            </div>
        </div>
    )
}

export default Footer;