import { useState } from "react"

export default function Usuario(props){
    const [NewNameUser, setNewNameUser] = useState(props.Name)
    const [NewImagemUser, setNewImagem] = useState(props.imagem)

    function MudarName(){
        const NewName = prompt("Escreva novo nome")
        return NewName?setNewNameUser(NewName):null;
     
    }
    function MudarImagem(){
        const NewImagem= prompt("Insira o link da sua foto")
        return NewImagem?setNewImagem(NewImagem):null;setNewImagem(NewImagem)
    }

    return(
        
          <div class="usuario" data-test="user">
                <img src={NewImagemUser} onClick={MudarImagem} data-test="profile-image"/>
                <div class="texto">
                    <strong>{props.UserName}</strong>
                    <span class="mudar" >
                        <p data-test="name">{NewNameUser}</p>
                        <ion-icon onClick={MudarName}  name="pencil" data-test="edit-name"></ion-icon>
                    </span>
                </div>
            </div>
    )
}
