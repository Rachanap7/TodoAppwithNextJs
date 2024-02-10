"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Navbar =()=>{
    const searchParams=useSearchParams();
    const filter = searchParams.get("todos");

    return(
        <nav className="todo-nav">
            <Link href="/" className={(filter===null)?"active":""}>All</Link>
            <Link href="/?todos=Active" className={(filter==="active")?"active":""}>Active</Link>
            <Link href="/?todos=Completed" className={(filter==="completed")?"active":""}>Completed</Link>
        </nav>
    )
}

export default Navbar;