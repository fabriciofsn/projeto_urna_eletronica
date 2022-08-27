import React, { useRef, useState } from 'react';

const Urna = () => {
  const inputElement = useRef(null);
  const lula = useRef(null);
  const bolsonaro = useRef(null);
  const nulos = useRef(null);

  const [lulaVote, setLulaVote] = useState(0);
  const [jairBolsonaro, setJairBolsonaro] = useState(0);
  const [votoNulo, setVotoNulo] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    const vote = Number(inputElement.current.value);
    inputElement.current.value = '';
    inputElement.current.focus();

    if (vote == 13) {
      setLulaVote((lulaVote) => lulaVote + 1);
    } else if (vote == 22) {
      setJairBolsonaro((jairBolsonaro) => jairBolsonaro + 1);
    } else if (vote !== 13 || vote !== 22) {
      setVotoNulo((votoNulo) => votoNulo + 1);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="align">
          <form>
            <input ref={inputElement} type="text" />
            <button onClick={handleClick}>Confirme</button>
          </form>
        </div>
      </div>
      <div className="votesCounter">
        <div id="bolsonaro">
          <label htmlFor="">Bolsonaro</label>
          <div ref={bolsonaro} className="bolsonaro">
            {jairBolsonaro}
          </div>
        </div>
        <div className="nulos">
          <label htmlFor="">Votos nulos</label>
          <div ref={nulos} className="nulo">
            {votoNulo}
          </div>
        </div>
        <div id="lula">
          <label htmlFor="">Lula</label>
          <div ref={lula} className="lula">
            {lulaVote}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urna;
