//import { Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CardMesa from '../../components/CardMesa/CardMesa';
import './styles.css';
import useGeralContext from '../../hooks/useGeralContext';

export default function Home() {
  
  const {mesas} = useGeralContext();  
  
  return (    
      <div className="container">
        <Header />
        <div className='container_home'>
          <div className='container_home__content'>
            {mesas.map(mesa => (
              <CardMesa id={mesa.id} mesa={mesa} />
            ))}
         </div>           
        </div>
      </div>    
  );
}