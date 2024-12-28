import Link from "next/link";


export default function NotFound() {
    return(
        <div>
            <h1>Página não encontrada!</h1>
            <Link href='/'>
                Voltar para a Home
            </Link>
        </div>
    )
}