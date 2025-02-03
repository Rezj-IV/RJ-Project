import { NextResponse } from "next/server"

export const config = {
    matcher :["/Profile/:path*"]
}
export default function middleware(request){
if(localStorage.get("Users") === undefined){
    // return NextResponse.redirect(new URL("http://localhost:3000/Login", request.url))
    return NextResponse.redirect("http://localhost:3001/Login")
}


} 