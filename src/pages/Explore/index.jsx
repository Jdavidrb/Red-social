import React from 'react';
import Post from '../../components/Post/Post';
import projectImage1 from '../../assets/images/img-proyect1.png';
import projectImage2 from '../../assets/images/project2.png';
import projectImage3 from '../../assets/images/project3.png';
import './Explore.css'; // Asegúrate de importar el archivo CSS

function Explore() {
  const posts = [
    {
      images: [projectImage1, projectImage2],
      profile: { image: projectImage1, name: 'User 1' },
      description: 'Description of project 1',
      skills: ['React', 'Node.js']
    },
    {
      images: [projectImage2],
      profile: { image: projectImage2, name: 'User 2' },
      description: 'Description of project 2',
      skills: ['Python', 'Django']
    },
    {
      images: [projectImage3],
      profile: { image: projectImage3, name: 'User 3' },
      description: 'Description of project 3',
      skills: ['Java', 'Spring']
    }
  ];

  return (
    <div className='Explore'>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post
            key={index}
            images={post.images}
            profile={post.profile}
            description={post.description}
            skills={post.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;