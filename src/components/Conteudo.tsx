interface ConteudoProps{
    title: string;
    conteudo: string;
}


export function Conteudo(props: ConteudoProps){
    return (

        <section>
            <div style={{border: "1px solid #ccc",}}>
                <h5>{props.title}</h5>
                <p>{props.conteudo}</p>
            </div>
        </section>

    )
}