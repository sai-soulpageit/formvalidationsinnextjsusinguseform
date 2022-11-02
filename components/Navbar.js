import Link from "next/link";
import Image from 'next/image'
import Logo from '../public/logo1.png'
// import Content from "./content";

export default function Navbar() {

  return (
    
<>

    <div className="rootdiv">


      <header className="headd">

        <div>
            <Image
             src={Logo}
              alt="Landscape picture"
              width={100}
              height={100} />
      
               {/* <h3 className="travels">Travels</h3> */}

        </div>

        <nav>
          <ul className="navigation">
            {/* <li> Home</li> */}
            <li>Destinations</li>
            <li> Map</li>
            <li> ContactUs </li>
          </ul>
        </nav>

        </header>


        <div className="sidebuttons">

            <div>
              <Link href='/home'>
              <button className="buttonn">Home</button>
              </Link>
            </div>


            <div>
             <Link href='/signuppage'>
               <button className="buttonn">Signup</button>
              </Link>
            </div>


            <div>
              <Link href='/loginpage'>
              <button className="buttonn">Login</button>
              </Link>
            </div>


         </div>
          
      
    </div>
    </>
  );
}