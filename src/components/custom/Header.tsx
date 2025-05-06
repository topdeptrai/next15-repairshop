import React from 'react';
import Link from "next/link";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

import NavButton from "@/components/custom/NavButton";
import {FileIcon, HomeIcon, UsersRound, LogOut} from "lucide-react";
import {ModeToggle} from "@/components/custom/ModeToggle";
import {Button} from "@/components/ui/button";


const Header = () => {
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" icon={HomeIcon} label="Home"/>

                    <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">
                    <NavButton href="/tickets" icon={FileIcon} label="Tickets"/>
                    <NavButton href="/customers" icon={UsersRound} label="Customers"/>
                    <ModeToggle/>
                    <Button variant="ghost" size="icon" aria-label="LogOut" title="LogOut" className="rounded-full"
                            asChild>
                        <LogoutLink>
                            <LogOut/>
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;