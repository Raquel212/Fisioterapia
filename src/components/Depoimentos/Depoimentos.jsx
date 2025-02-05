import { useState, useEffect, useRef} from 'react';
import "./depoimentos.css"
import { motion } from 'framer-motion';

import image1 from "../../components/images/depoimento1.png";
import image2 from "../../components/images/depoimento2.png";
import image3 from "../../components/images/depoimento3.png";
import image4 from "../../components/images/depoimento4.png";

const images = [image1, image2, image3, image4, image1, image1];

function Depoimentos() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div className="App">
        <h3>Veja o que dizem meus pacientes</h3>
  
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="inner"
            animate={{ x: [0, -width] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          >

            {[...images, ...images].map((image, index) => (
              <motion.div className="item" key={index}>
                <img src={image} alt="Texto alt" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
}



export default Depoimentos;