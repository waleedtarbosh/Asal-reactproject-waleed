import { FcReading } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcFlashAuto } from "react-icons/fc";
export const SidebarData=[
    {
        title: "Student",
        path: "/",
        icon: <FcReading size={40}/>,
      },
      {
        title: "Teacher",
        path: "/Teacher",
        icon: <FcBusinessman size={40}></FcBusinessman>,
      },
      {
        title: "ClassRoom",
        path: "/ClassRoom",
        icon: <FcDepartment size={40}></FcDepartment>,
      },
      {
        title: "Subject",
        path: "/Subject",
        icon: <FcInspection size={40}></FcInspection>,
      },
      {
        title: "Grade",
        path: "/Grade",
        icon: <FcFlashAuto size={40} ></FcFlashAuto>,
      },
     
]