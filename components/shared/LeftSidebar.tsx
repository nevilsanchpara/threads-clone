"use client";
import Link from "next/link";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}>
              <Image alt='icon' src={link.imgURL} width={24} height={24} />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LeftSidebar;
