import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
 const NavlinlClass="flex items-center rounded-lg gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5  transition-all duration-300";
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2">
      <ul className="flex flex-col gap-y-4 pt-4">
      <li>
        <CustomNavLink to={"/owner/dashboard"}>
        <HiHome/>
         <span>داشبورد</span>
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={"/owner/projects"}>
         <HiCollection/>
         <span>پروژه ها</span>
        </CustomNavLink>
      </li>
      </ul>
    
    </div>
  );
}
export default Sidebar;



function CustomNavLink ({children , to}){
  const NavlinlClass="flex items-center rounded-lg gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5  transition-all duration-300";
  return(
    <NavLink 
    to={to}
    className={({ isActive }) =>
    isActive ? ` ${NavlinlClass}  bg-primary-100/50 text-primary-900` : `${NavlinlClass}  text-secondary-600`  }>
      {children}
    </NavLink>
  );
}