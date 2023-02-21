import AddIcon from '@mui/icons-material/Add';
import RequestPayment from '@mui/icons-material/RequestQuote';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useEffect, useState } from 'react';
import './styles.css'

const CardMesa = ({id, mesa}) => {

   const handleActivateMesa = (id) => {
        mesa.ativa = !mesa.ativa;
        console.log(mesa);       
    }

    const handleListButton = (e) => {
        console.log(e.id);
    }

    const handlePayButton = (e) => {
        console.log(e.id);
    }

    const handleAddButton = (e) => {
        console.log(e.id);
    }

    useEffect(()=>{}, []);

    return(
        <div className="card" id={id} onClick={handleActivateMesa(id)}>
            <div className={`card_header ${(mesa.ativa) ? 'ocupada' : 'desocupada'}`}>
                <h4>MESA {`#${mesa.id}`}</h4>
            </div>
            <div className='card_content'>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>...</span>
            </div>
            <div className={`card_footer ${(mesa.ativa) ? 'ocupada' : 'desocupada'}`}>
                <button name='detalhe' className='btn btn-list' 
                title='Detalhes' onClick={()=>handleListButton(mesa)}>
                    <ViewListIcon className='btn-icons'/>
                </button>
                <button name='pagar' 
                className='btn btn-pay' 
                title='Fechar'>
                    <RequestPayment  className='btn-icons'/>
                </button>
                <button name='adicionar' 
                 className='btn btn-add' title='Adicionar'>
                    <AddIcon className='btn-icons'/>
                        </button>
            </div>
        </div>
    );
}
export default CardMesa;