import Title from "./Title"
import Image from "./Image";
import Author from "./Author";
import "../App.css"
function Book()
{
    return(
        <article  className="book">
            <Image />
            <Title />
            <Author />
        </article>
    ); 
}
export default Book ;


