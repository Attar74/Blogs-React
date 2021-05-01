import { useParams } from "react-router";
import useFetech from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetech(`http://localhost:8000/blogs/${id}`);
    const history = useHistory(); 

    const handleClick = ()=>{
        fetch(`http://localhost:8000/blogs/${blog.id}`,{
            method: "DELETE"
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <em>Written By: {blog.author}</em>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;