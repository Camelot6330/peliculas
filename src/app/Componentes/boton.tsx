type ButtonComprarProps = {
  manejarClick: () => void;
};

export default function ButtonComprar({ manejarClick }: ButtonComprarProps) {
  return (
    <button
      className="btn-add"
      onClick={manejarClick}
    >
      Comprar Ticket
    </button>
  );
}
