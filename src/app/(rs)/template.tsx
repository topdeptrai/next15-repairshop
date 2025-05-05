// template re-renders every time while layout only rendered when app loads
import {PropsWithChildren} from "react";

export default async function Template({children}: PropsWithChildren) {
    return (
        <div className="animate-appear">
            {children}
        </div>
    )
}