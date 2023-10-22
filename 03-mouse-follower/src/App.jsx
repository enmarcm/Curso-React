import { useState, useEffect } from "react";

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState("");
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      // console.log(`Posicion actual X:${clientX} Y:${clientY}`);
      setPosition({ x: clientX, y: clientY });
    };

    if (state) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      console.log('Me desmonte jaja') //<-- Esto se ejecuta cuando el componente se desmonta
      window.removeEventListener("pointermove", handleMove);
    };
  }, [state]);

  const textStatus = state ? "Desactivar" : "Activar";
  const handlerStatus = () => setState(!state);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#111",
          borderRadius: "50%",
          opacity: 0.9,
          border: "1 solid #fff",
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={handlerStatus}>{textStatus} seguir puntero</button>
    </>
  );
};

function App() {
  const [montado, setMontado] = useState(false)
  return (
    <>
      {montado && <FollowMouse />}
      <button onClick={()=>setMontado(!montado)}>Cambiar</button>
    </>
  );
}

export default App;
