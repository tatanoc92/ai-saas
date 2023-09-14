import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {

    const session = await getServerSession(authOptions);

    return (
        <>
            <div>Landing Page (unprotected)</div>

            {session && (
                <>
                    <div>Signed in as {session.user && session.user.name}</div>
                    <a href={'/api/auth/signeout'}>Sign out</a></>
            )
            }
            {
                !session && (
                    <p>Not signed in</p>
                )
            }
        </>)
}