 import { Link } from 'react-router-dom'
import './Home.css';


const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Sunset in Mountains",
      desc: "A beautiful sunset view over the snow-capped mountains.",
      img: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg"
    },
    {
      id: 2,
      title: "City Lights",
      desc: "Nighttime city skyline illuminated with vibrant lights.",
      img: "https://images.pexels.com/photos/7808603/pexels-photo-7808603.jpeg?cs=srgb&dl=pexels-wallace-chuck-7808603.jpg&fm=jpg"
    },
    {
      id: 3,
      title: "Forest Path",
      desc: "A peaceful walking path through a dense forest.",
      img: "https://th.bing.com/th/id/OIP.BH-qGi1y9rSzMYMvm_EFIgAAAA?r=0&cb=iwc2&rs=1&pid=ImgDetMain"
    },
    {
      id: 4,
      title: "Desert Dunes",
      desc: "Golden sand dunes under a clear blue sky.",
      img: "https://c8.alamy.com/comp/R4BX5Y/las-vegasnevadausa-05-30-17-beautiful-las-vegas-arial-view-at-night-R4BX5Y.jpg"
    },
    {
      id: 5,
      title: "Ocean Breeze",
      desc: "Waves crashing on a tropical beach with palm trees.",
      img: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg"
    }
  ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
