import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    const images = [
        "https://img.freepik.com/fotos-premium/criacao-de-uma-visao-melodiosa-de-instrumentos-musicais-conjunto-sintetizador-guitarra-eletronica-tambor-de-madeira_386167-2995.jpg?w=2000",
        "https://media.istockphoto.com/id/641307550/photo/piano-keyboard-of-an-old-music-instrument-close-up.jpg?s=170667a&w=0&k=20&c=-O19kRpmPleeoErhUceMsjVAibHAaiOwsFUanWqQ7j8=",
        "https://5.imimg.com/data5/SELLER/Default/2021/3/GK/VY/UB/15237173/professional-folk-musical-instrument-brass-tabla-high-quality-drums-set-with-bag-1000x1000.jpg",
        "https://singersroom.com/wp-content/uploads/2023/02/Drums-Musical-Instrument-scaled.jpg",
        "https://cdn.britannica.com/66/142066-050-5827CAFC/Mandolin.jpg",
    ];

    return (
        <Carousel>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
