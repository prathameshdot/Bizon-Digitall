"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  
  // Animated slider
  const [sliderStyle, setSliderStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlider = () => {
      if (!navRef.current || !logoRef.current) return;
      
      // Check if current path is a service subpage (starts with /services/)
      const isServiceSubpage = usePathName.startsWith('/services/');
      
      let activeIndex;
      if (isServiceSubpage) {
        // Find the Services menu item index (the one without a path but has submenu)
        activeIndex = menuData.findIndex(item => !item.path && item.submenu?.some(sub => sub.path.startsWith('/services/')));
      } else {
        activeIndex = menuData.findIndex(item => item.path === usePathName);
      }
      
      const navRect = navRef.current.getBoundingClientRect();
      
      // Calculate padding offset (24px = 6 * 4px in Tailwind)
      const padding = 24;
      
      // For home page or when no match, cover logo + Home menu item
      const homeIndex = 0; // Home is always first in menuData
      const targetIndex = (usePathName === "/" || activeIndex === -1) ? homeIndex : activeIndex;
      
      const activeLink = navRef.current.querySelector(`[data-index="${targetIndex}"]`);
      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        
        // Start from padding (left edge)
        const startX = padding;
        // End at the right edge of the active menu item
        let endX = linkRect.right - navRect.left;
        
        // If there's a next menu item, extend halfway to it
        const nextIndex = targetIndex + 1;
        if (nextIndex < menuData.length) {
          const nextLink = navRef.current.querySelector(`[data-index="${nextIndex}"]`);
          if (nextLink) {
            const nextLinkRect = nextLink.getBoundingClientRect();
            const nextLinkLeft = nextLinkRect.left - navRect.left;
            
            // Calculate halfway distance between current right and next left
            const halfwayPoint = endX + ((nextLinkLeft - endX) / 2);
            endX = halfwayPoint;
          }
        } else {
          // If it's the last item, just add padding
          endX += padding;
        }
        
        setSliderStyle({
          left: startX,
          width: endX - startX,
        });
      }
    };

    // Update on mount and path change
    updateSlider();
    
    // Update on resize
    window.addEventListener('resize', updateSlider);
    
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(updateSlider, 100);
    
    return () => {
      window.removeEventListener('resize', updateSlider);
      clearTimeout(timeout);
    };
  }, [usePathName]);

  // Determine if a menu item should be black (inside white slider)
  const getMenuItemColor = (menuPath: string, isServicesMenu: boolean = false) => {
    // Check if current path is a service subpage
    const isServiceSubpage = usePathName.startsWith('/services/');
    
    // If we're on a service subpage and this is the Services menu, make it black
    if (isServiceSubpage && isServicesMenu) {
      return "text-black";
    }
    
    const currentIndex = menuData.findIndex(item => {
      if (isServiceSubpage) {
        return !item.path && item.submenu?.some(sub => sub.path.startsWith('/services/'));
      }
      return item.path === usePathName;
    });
    
    const itemIndex = menuData.findIndex(item => item.path === menuPath);
    
    // If on home page and this is home, make it black
    if (usePathName === "/" && menuPath === "/") {
      return "text-black";
    }
    
    // If item is at or before the selected item, make it black
    if (currentIndex !== -1 && itemIndex <= currentIndex) {
      return "text-black";
    }
    
    // Otherwise, keep it white
    return "text-white/70 hover:text-white";
  };

  return (
    <>
      <header
        className="header fixed top-0 left-0 z-40 w-full pt-2 px-3 sm:pt-4 sm:px-4 md:px-6 lg:pt-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="relative bg-black rounded-full px-3 py-3 sm:px-5 sm:py-6 lg:px-6" ref={navRef}>
            {/* Animated White Slider with padding - Tablet & Desktop */}
            <div 
              className="absolute bg-white rounded-full transition-all duration-500 ease-in-out hidden md:block"
              style={{
                left: `${sliderStyle.left}px`,
                width: `${sliderStyle.width}px`,
                top: '12px',
                bottom: '12px',
                zIndex: 1,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              {/* Logo - Left Side */}
              <div className="w-24 sm:w-28 md:w-32 lg:w-40 max-w-full pl-4 pr-2 sm:pl-5 sm:pr-3 md:px-4 lg:px-6 flex-shrink-0" ref={logoRef}>
                <Link
                  href="/"
                  className="header-logo block w-full"
                >
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full"
                  />
                </Link>
              </div>

              {/* Menu Items - Right Side */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-6">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="block md:hidden z-20 p-2"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[24px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[24px] bg-white transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[24px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute left-3 right-3 top-[70px] z-30 rounded-2xl bg-black border-2 border-white px-6 py-6 duration-300 md:visible md:static md:w-auto md:border-none md:!bg-transparent md:p-0 md:opacity-100 md:top-auto ${
                    navbarOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0 md:visible md:opacity-100"
                  }`}
                >
                  <ul className="block space-y-2 md:space-y-0 md:flex md:gap-0.5 lg:gap-0.5 xl:gap-1">
                    {menuData.map((menuItem, index) => {
                      // Check if current path matches any submenu item OR if it's a service subpage
                      const isServiceSubpage = usePathName.startsWith('/services/');
                      const isServicesMenu = !menuItem.path && menuItem.submenu?.some(sub => sub.path.startsWith('/services/'));
                      const isSubmenuActive = menuItem.submenu?.some(
                        (subItem) => usePathName === subItem.path
                      ) || (isServiceSubpage && isServicesMenu);
                      
                      return (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            data-index={index}
                            onClick={() => setNavbarOpen(false)}
                            className={`relative flex py-3 px-4 text-base font-medium rounded-lg transition-colors duration-300 md:px-2 md:py-3 md:rounded-none md:transition-colors md:duration-500 lg:px-2 xl:px-4 whitespace-nowrap ${
                              usePathName === menuItem.path
                                ? "bg-white text-black md:bg-transparent md:text-black"
                                : `text-white hover:bg-white/10 md:hover:bg-transparent md:${getMenuItemColor(menuItem.path)}`
                            }`}
                          >
                            <span className="text-sm md:text-[12px] lg:text-[13px] xl:text-[15px]">{menuItem.title}</span>
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              data-index={index}
                              className={`flex cursor-pointer items-center justify-between py-3 px-4 text-base font-medium rounded-lg md:rounded-none md:py-3 md:px-2 lg:px-5 transition-all duration-300 ${
                                isSubmenuActive
                                  ? "bg-white text-black md:bg-transparent md:text-black"
                                  : `text-white hover:bg-white/10 md:hover:bg-transparent md:${getMenuItemColor(menuItem.path, isServicesMenu)}`
                              }`}
                            >
                              <span className="text-sm md:text-[12px] lg:text-[13px] xl:text-[15px]">{menuItem.title}</span>
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu mt-2 rounded-lg bg-[#1a1a1a] p-2 md:mt-0 md:absolute md:top-full md:left-0 md:rounded-2xl md:bg-black md:border-2 md:border-white md:transition-all md:duration-300 md:group-hover:opacity-100 md:invisible md:top-[110%] md:block md:w-[250px] md:p-4 md:opacity-0 md:shadow-2xl md:group-hover:visible md:group-hover:top-full lg:w-[280px] md:z-50 ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path}
                                  key={subIndex}
                                  onClick={() => {
                                    setNavbarOpen(false);
                                    setOpenIndex(-1);
                                  }}
                                  className="block rounded-lg py-2.5 px-3 text-sm text-white hover:bg-white/10 transition-all duration-300 hover:text-[#FF7A00]"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    )})}
                    
                  </ul>
                  
                  {/* Mobile Get Quotes Button */}
                  <div className="mt-4 md:hidden">
                    <Link
                      href="/contact"
                      onClick={() => setNavbarOpen(false)}
                      className="block text-center rounded-full bg-[#FF7A00] hover:bg-[#e66d00] px-8 py-3 text-base font-semibold text-white transition-all duration-300 shadow-lg"
                    >
                      Get Quotes
                    </Link>
                  </div>
                </nav>
                
                {/* Tablet & Desktop Get Quotes Button */}
                <Link
                  href="/contact"
                  className="hidden md:block rounded-full bg-[#FF7A00] hover:bg-[#e66d00] px-3 py-2 md:px-4 md:py-2.5 lg:px-4 lg:py-2.5 xl:px-8 xl:py-3 text-xs md:text-sm xl:text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl z-10 relative whitespace-nowrap"
                >
                  Get Quotes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
