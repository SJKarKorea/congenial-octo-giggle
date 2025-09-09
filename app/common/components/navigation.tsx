import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "케이에이알",
    to: "/kar",
  },
  {
    name: "주요기술",
    to: "/kar#technology",
  },
  {
    name: "모빌리티 토탈 솔루션",
    to: "/kar#services",
  },
  {
    name: "고객문의",
    to: "/kar#ideas",
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          KAR
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                (
                <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                  {menu.name}
                </Link>
                )
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
