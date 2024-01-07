import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
              const [dataPost ,setDataPost] = useState([])
              const singlePostData = useParams()
              console.log(singlePostData)

              useEffect(() => {
                            fetch('feature.json')
                            .then(res => res.json())
                            .then(data => setDataPost(data))
              },[])

              return (
                            <div>
                                  Post Details        
                            </div>
              );
};

export default PostDetails;