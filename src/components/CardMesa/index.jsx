import AddIcon from '@mui/icons-material/Add';
import RequestPayment from '@mui/icons-material/RequestQuote';
import ViewListIcon from '@mui/icons-material/ViewList';
import { IconButton } from '@mui/material';
import ModalAdd from '../ModalAdd';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import useGeralContext from '../../hooks/useGeralContext';

import './styles.css'


const CardMesa = ({mesa, handleOcupar}) => {

    const {handleOpen, handleClose, openModal} = useGeralContext();
    
    return(

        <div className="card" id={mesa.id}>
            <div  id={`mesa-${mesa.id}`} 
            className={`card_header ${(mesa.ativa) ? 'ocupada' : 'desocupada'}`}
            >
                <h4>MESA {`#${mesa.id}`}</h4>
                <div >
                    <IconButton onClick={()=>handleOcupar(mesa.id)} 
                        style={(mesa.ativa)?{backgroundColor: 'green'}:{display: 'none'}}>
                        <ArrowCircleUpRoundedIcon />
                    </IconButton>
                    <IconButton onClick={()=>handleOcupar(mesa.id)}
                    style={(mesa.ativa)?{display: 'none'}:{backgroundColor: 'red'}}>
                        <ArrowCircleDownRoundedIcon/>                    
                    </IconButton>
                </div>
            </div>
            <div className='card_content'>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>Espetinho de frango</span>
                <span>...</span>
            </div>
            <div className={`card_footer ${(mesa.ativa) ? 'ocupada' : 'desocupada'}`}>
                <button name='detalhe' 
                    className='btn btn-list' 
                    title='Detalhes'
                    onClick={()=>handleOpen('detalhar')
                }>
                    <ViewListIcon className='btn-icons'/>
                </button>
                <button name='pagar' 
                    className='btn btn-pay' 
                    onClick={()=>handleOpen('fechar')}
                    title='Fechar'>
                    <RequestPayment  className='btn-icons'/>
                </button>
                <button name='adicionar' id={`mesa-${mesa.id}`}
                className='btn btn-add' 
                onClick={(e)=>handleOpen(e.target.id, e.target.name)}
                title='Adicionar'>
                    <AddIcon className='btn-icons'/>
                </button>
            </div>
            {(openModal.adicionar) ? 
                <ModalAdd 
                     openModal={openModal.adicionar} 
                     handleClose={handleClose}/> 
                : null}
        </div>
        
    );
}
export default CardMesa;