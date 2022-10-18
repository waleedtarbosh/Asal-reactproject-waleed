import React from 'react';
import { useApi } from './useApi';
function StudentTable() {
  
  const [users,loading, err] =useApi('https://api.github.com/users/ariv797/repos')

  return (
    
    <div className="container">
      {loading && <p>Loading...</p>}
        <h2> There are {users.length} Student in the Database </h2>
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
            {users.map((post) => (
              <tr key={post.id}>
               
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


        {err && <p>{err}</p>}
    
      

    </div>
  );
}

export default StudentTable;
