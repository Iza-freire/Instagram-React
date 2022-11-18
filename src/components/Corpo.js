import Stories from "./Stories"
import Post from "./Post"
import SiderBar from "./SiderBar"

export default function Corpo(){
    return(
           <div class="corpo">
        <div class="esquerda">
            <Stories/>
            <Post/>
        </div>
        <SiderBar/>


  </div>
    )
}