//import { Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CardMesa from '../../components/CardMesa';
import './styles.css';
import useGeralContext from '../../hooks/useGeralContext';

export default function Home() {
  
  const {mesas, setMesas, useEffect, useState} = useGeralContext();
  const [ativo, setAtivo] = useState(false); 

  const handleOcupar = (id) => {    
    const localMesas = mesas; 
    setAtivo(!ativo);
    for(let m of localMesas){
      if(m.id === Number(id)){
        m.ativa = ativo;  
      }
    }
    
    setMesas([...localMesas]); 
    return;   
  }

  useEffect(()=>{
    
  }, []);
  
  return (    
      <div className="container">
        <Header />
        <div className='container_home'>
          <div className='container_home__content'>
            {mesas.map(mesa => (
              <CardMesa key={mesa.id} 
              mesa={mesa} 
              setMesas={setMesas} 
              handleOcupar={handleOcupar} />
            ))}
         </div>           
        </div>               
      </div>    
  );
}