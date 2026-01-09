import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

export function MobilMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <GiHamburgerMenu size={20} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <Collapsible
                    className="flex w-full flex-col gap-2"
                >
                    <div className="flex items-center justify-between gap-4 px-4 cursor-pointer">
                        
                        <CollapsibleTrigger asChild>
                            <div className="flex justify-between w-full items-center">
                                <h4 className="text-sm font-semibold">
                                    Anasayfa
                                </h4>
                                <IoIosArrowDown />
                            </div>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 1
                        </div>
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 2
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                 <Collapsible
                    className="flex w-full flex-col gap-2"
                >
                    <div className="flex items-center justify-between gap-4 px-4 cursor-pointer">
                        
                        <CollapsibleTrigger asChild>
                            <div className="flex justify-between w-full items-center">
                                <h4 className="text-sm font-semibold">
                                    Kurumsal
                                </h4>
                                <IoIosArrowDown />
                            </div>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 1
                        </div>
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 2
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                 <Collapsible
                    className="flex w-full flex-col gap-2"
                >
                    <div className="flex items-center justify-between gap-4 px-4 cursor-pointer">
                        
                        <CollapsibleTrigger asChild>
                            <div className="flex justify-between w-full items-center">
                                <h4 className="text-sm font-semibold">
                                    Kategoriler
                                </h4>
                                <IoIosArrowDown />
                            </div>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 1
                        </div>
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 2
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                 <Collapsible
                    className="flex w-full flex-col gap-2"
                >
                    <div className="flex items-center justify-between gap-4 px-4 cursor-pointer">
                        
                        <CollapsibleTrigger asChild>
                            <div className="flex justify-between w-full items-center">
                                <h4 className="text-sm font-semibold">
                                    İletişim
                                </h4>
                                <IoIosArrowDown />
                            </div>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 1
                        </div>
                        <div className="px-4 py-2 font-mono text-sm">
                            Link 2
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </SheetContent>
        </Sheet>
    )
}
