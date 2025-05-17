import React from "react";
import "./single.css";
import viva from "../../assets/viva.png";
import { Link } from "react-router-dom";
import Menu from "../../component/menu/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={viva} alt="cover" />

        <div className="user">
          <img src={viva} alt="author" />
          <div>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={viva} alt="edit" />
            </Link>
            <img src={viva} alt="delete" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt !
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          dolorum in dignissimos rerum tenetur! Assumenda beatae obcaecati
          perspiciatis explicabo fuga fugiat hic eum, ipsum, quibusdam placeat,
          eligendi sed aperiam dolore Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur nemo explicabo omnis distinctio repellat
          maiores neque molestias unde nobis quae. Similique, odio illo
          consequatur dolor porro at obcaecati! Ea, deserunt. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Aliquam eligendi natus magnam
          tempora eius ratione nam sapiente, necessitatibus corrupti quaerat
          culpa consequatur dolor laudantium ipsum neque architecto impedit.
          Fugit, ipsa!
        </p>
      </div>

      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
