import Stories from "./Stories"
import SiderBar from "./SiderBar"
import Posts from "./Posts"

export default function Corpo(){
    return(
           <div class="corpo">
        <div class="esquerda">
            <Stories/>
            <Posts/>
        </div>
        <SiderBar/>


  </div>
    )
}