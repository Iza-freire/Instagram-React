function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                    <img src={props.Sugestao.imagem} />
                <div class="texto">
                    <div class="nome">{props.Sugestao.nome}</div>
                    <div class="razao">{props.Sugestao.reason}</div>
                </div>
            </div>

        <div class="seguir">seguir</div>
    </div>
    )
}

export default function Sugestoes(){
    
    const suggestions = [
        { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", reason: "Segue você"},
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", reason: "Segue você"},
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg" , reason: "Segue você"},
        { nome: "bad.vibes.memes", imagem: "assets/img/adorable_animals.svg", reason: "Novo no Instagram"},
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", reason: "Segue você"}
      
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((mostrar) => <Sugestao Sugestao={mostrar}/>)}
        </div>
    )
}