
import React from "react";



export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: any[];
} 
const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Getting started",
    menus: [
      { href: "/", label: "Connect" },
      { href: "/new-bet", label: "Create" },
      { href: "/explore", label: "Explore" },
    ],
  },

  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "/", label: "Wallet" },
      { href: "/explore", label: "Bets" },
    ],
  },
  {
    id: "4",
    title: "Socials",
    menus: [
      { href: "facebook.com", label: "Facebook" },
      { href: "twitter.com", label: "Twitter" },
      { href: "instagram.com", label: "Instagram" },

    ],
  },
];
const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm ">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative  py-10 lg:pt-10 lg:pb-10 border-t border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="container justify-items-center grid grid-cols-3 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-10 ">
  
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};


export default Footer;
