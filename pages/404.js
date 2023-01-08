import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const NotFoundPage = () => {

const router = useRouter();     

    useEffect(() => {
    setTimeout(()=> {
    router.push("/")
    }, 3000); 

    }, [])

    return (
        <div className="not-found">
            <h1>Ошибка</h1>
            <h2>Такой страницы не существует</h2>
            <p>Перейти на <Link legacyBehavior href="/"><a>на главную страницу</a></Link></p>
        </div >
    );
};

export default NotFoundPage;