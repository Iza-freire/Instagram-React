import { useState } from "react"

function Post(props){
     const [Save, setWasSave] = useState(false)
     const [Like, setWasLike] = useState(false)
     const [count, setcount] = useState (props.Post.initialLikes)


    function ChangeSaved(){
        setWasSave(!Save)
    }


    function ChangeLike(){
        if(!Like){
            setcount(count + 1)
        } else {
            setcount(count - 1)
        }
        setWasLike(!Like)
    }

    function ImagemLike(){
        if(!Like){
            setWasLike(true)
            setcount(count + 1)
        }
    }

    return( 
        <div class="post" data-test="post">
                <div class="topo">
                <div class="usuario">
                    <img src={props.Post.UserImagem}/>
                    {props.Post.UserName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                </div>

                <div class="conteudo">
                <img src={props.Post.ContentImagem} onDoubleClick={ImagemLike} data-test="post-image"/>
                </div>

                <div class="fundo">
                <div class="acoes">
                    <div>
                        {Like ? (
                        <ion-icon onClick={ChangeLike} class="like" name="heart" data-test="like-post"></ion-icon>
                        ) : (
                        <ion-icon onClick={ChangeLike}  name="heart-outline" data-test="like-post"></ion-icon>
                        )}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {Save ? ( 
                            <ion-icon onClick={ChangeSaved} name="bookmark" data-test="save-post" ></ion-icon>
                        ) : (
                            <ion-icon onClick={ChangeSaved} name="bookmark-outline" data-test="save-post"></ion-icon>
                        )}
                    
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.Post.likeImagem} />
                    <div class="texto" data-test="likes-number">
                    Curtido por <strong>{props.Post.likeText}</strong> e <strong>{count}</strong>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default function Posts(){
    const posts =[
        {UserName: "meowed",
         UserImagem: "assets/img/meowed.svg",
         ContentImagem: "assets/img/gato-telefone.svg",
         likeImagem: "assets/img/respondeai.svg",
         likeText: "respondeai", 
         initialLikes: 101524
        },
    
         {UserName: "barked",
         UserImagem: "assets/img/barked.svg",
         ContentImagem: "assets/img/dog.svg",
         likeImagem: "assets/img/adorable_animals.svg",
         likeText: "adorable_animals", 
         initialLikes: 206654
        }
    ]
    
    return (
        <div class="posts">
            {posts.map((mostrar) => <Post Post={mostrar} />)}
        </div>
    )
}
