import NavbarCartMenu from "./NavbarCartMenu";
import NavabarProfilrMenu from "./NavabarProfilrMenu";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Link from "next/link";
import { useRouter } from "next/router";
import { cartContext } from "@/context/Context";
import Image from "next/image";

const Navlinks = ({ User }) => {
  const {
    state: { cart },
  } = cartContext();
  const router = useRouter();
  return (
    <>
      <div className="btn btn-ghost text-xs">
        <Link href="/Blog">Blogs</Link>
      </div>
      <div className="btn btn-ghost text-xs">
        <Link href="/Home#AboutUs">About Us</Link>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <div className="w-6">
              <ShoppingCartRoundedIcon />
            </div>

            <span className="badge badge-sm indicator-item">{cart.length}</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <NavbarCartMenu />
        </div>
      </div>

      <div className="dropdown dropdown-end ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-8  mx-2 rounded-full">
            <Image
              width={100}
              height={100}
              src={
                User
                  ? User.photoURL === null
                    ? "/usericon.png"
                    : User.photoURL
                  : "/usericon.png"
              }
            />
          </div>
        </label>
        <NavabarProfilrMenu />
      </div>
    </>
  );
};

export default Navlinks;
