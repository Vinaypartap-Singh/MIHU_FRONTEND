import authOptions, {
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";

export interface navItemsType {
  name: string;
  url: string;
}

export default async function Header() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const user = session?.user;

  const navItems: navItemsType[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Template",
      url: "/template",
    },
    {
      name: "Why MIHU",
      url: "/why-mihu",
    },
    {
      name: "Contact us",
      url: "/contact-us",
    },
  ];

  return (
    <header className="body-font h-[80px]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-lg font-semibold">Mihu Builder</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navItems.map((data, index) => {
            return (
              <Link
                className="mr-5 hover:text-gray-900 text-sm"
                href={`${data.url}`}
                key={index}
              >
                {data.name}
              </Link>
            );
          })}
        </nav>
        <div>
          {user ? (
            <Button asChild variant={"outline"}>
              <Link href={"/dashboard"}>{user?.name}</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
