import Image from "next/image";
import ButtonComprar from "../Componentes/boton.js";

function CardPelicula({ Nombre, Categoria, rating, foto, onRentar }) {
    const cardStyle = {
        backgroundColor: rating < 3 ? '#ff4d4d' : '#1a1a1a',
        padding: '20px',
        borderRadius: '15px',
        color: 'white'
    };

    return (
        <div className="card-servicio" style={cardStyle}>
            <div className="card-image-container">
                <Image
                    src={foto}
                    alt={Nombre}
                    width={200}
                    height={300}
                    className="card-img"
                />
            </div>

            <div className="card-content">
                <span className="card-tag">🎬 {Categoria}</span>
                <h2 className="card-title">{Nombre}</h2>

                <div className="card-footer">
                    <p className="card-rating">⭐ {rating}</p>
                    <ButtonComprar manejarClick={onRentar} />
                </div>
            </div>
        </div>
    );
}

export default CardPelicula;
