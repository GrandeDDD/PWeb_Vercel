export default function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Minhas Receitas</h1>
            <ul>
                <li>
                    <a href="/Next1">
                    Next 1
                    </a>
                </li>
                <li>
                    <a href="/Next2/novaPagina">
                    Next 2
                    </a>
                </li>
                <li>
                    <a href="/Next3/movies">
                    Next 3
                    </a>
                </li>
            </ul>
            <style jsx global>{`
                ul {
                    list-style-type: none;
                }
            `}
            </style>
        </div>
    );
}