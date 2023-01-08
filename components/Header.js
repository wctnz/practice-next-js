import Link from "next/link"
import { SiBurgerking } from "react-icons/si"

const Header = () => {
    return (

        <header>
            <Link href="/">
                <SiBurgerking />
            </Link>
            <nav>
                <Link legacyBehavior href="/"><a>домой</a></Link>
                <Link legacyBehavior href="/About"><a>о нас</a></Link>
                <Link legacyBehavior href="/reviews"><a>отзывы</a></Link>
                <Link legacyBehavior href="/burgers"><a>деревня листа</a></Link>
            </nav>
        </header>


    );
};

export default Header;