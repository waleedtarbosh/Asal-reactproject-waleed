import axios from "axios";
import { useState, useEffect } from "react";
import "./Tablee.css";
const Tablee = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://api.github.com/users/ariv797/repos";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);


  if (posts.length === 0) return <h2> There are no Student in the Database </h2>;
  return (
    <>
      <div className="container">
        <h2> There are {posts.length} Student in the Database </h2>
        <table className="table">
          <thead>
            <tr>
              
              <th>Id</th>
              <th>Full_Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Language</th>
              <th>Stargazers_Count</th>
              <th>Watchers_Count</th>
              <th>Visibility</th>
              <th>Default_Branch</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
               
                <td> {post.id} </td>
                <td> {post.full_name} </td>
                <td> {post.owner.type} </td>
                <td> {post.size} </td>
                <td>{post.language} </td>
                <td>{post.stargazers_count} </td>
                <td>{post.watchers_count} </td>
                <td>{post.visibility} </td>
                <td>{post.default_branch} </td>
                



              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tablee;
