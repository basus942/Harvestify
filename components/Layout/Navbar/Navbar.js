import Image from "next/image";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/ProtectedRoute";
import { useContext, useState } from "react";
import Navlinks from "./Navlinks";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
const Navabar = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const User = useContext(AuthContext);
  const [openhamburger, setOpenhamburger] = useState(false);

  const router = useRouter();

  const handleHamburger = () => {
    setOpenhamburger((prev) => !prev);
  };
  return (
    <>
      <div className="navbar bg-[#038242] justify-between items-center">
        <Image
          src="/default.png"
          width="150"
          height="60"
          className="p-1 bg-blend-multiply cursor-pointer"
          onClick={() => router.push("/Home")}
        />

        <div className="md:flex-1 justify-end">
          {/* {User ? ( */}
          <div className="hidden md:block">
            <Navlinks User={User} />
          </div>

          <div
            className="btn btn-ghost text-lg md:hidden flex-col menu menu-compact dropdown-content"
            onClick={handleHamburger}
          >
            {openhamburger ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </div>
        </div>
      </div>
      {isSmallScreen && (
        <LazyMotion features={domAnimation}>
          {openhamburger && (
            <m.div
              initial={{
                x: 0,
                y: 0,

                // height: "100vh",
                width: "100%",
              }}
              animate={{ x: 0, y: 0 }}
              className=" bg-[#163827]

               z-5 "
            >
              <Navlinks />
            </m.div>
          )}
        </LazyMotion>
      )}
    </>
  );
};

export default Navabar;
