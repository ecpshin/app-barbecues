import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGeralContext from '../../hooks/useGeralContext';
import api from '../../services/api';
import './styles.css';

export default function ModalAdd({openModal, handleClose}){
    
    const {useEffect, initForms, form, setForm, atendentes, getAllAtendentes} = useGeralContext();
    const navigate = useNavigate();
    
    const styles = {
        mymodal: {position: 'absolute', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}
    }
    
    const cardapio = [
        {
            id: 1,
            descricao: 'espetinho de frango',
            preco: 500
        },
        {
            id: 2,
            descricao: 'espetinho de lingua',
            preco: 500
        },
        {
            id: 3,
            descricao: 'cerveja skol (lata)',
            preco: 500
        },
        {
            id: 4,
            descricao: 'cachaça matuta (dose)',
            preco: 300
        },
        {
            id: 5,
            descricao: 'pão de alho',
            preco: 500
        },
        {
            id: 6,
            descricao: 'espetinho de carne',
            preco: 500
        },
    ];
    
    async function handleSubmitForm(e){
       e.preventDefault();
       try {
          const response = await api.post('/pedidos', form);
          if (response.statusText === 'OK'){
            handleClose();
            navigate('/');
            return;
          };       
       } catch (error) {
          console.log(error);
       }
    }

    function handleInputChange(prop, e){
        console.log(e.target.value);
        setForm({...form, [prop]: e.target.value});
        return;
    }

    function handleSelectChange(e){
        setForm({...form, [e.target.name]: e.target.value});
        return;
    }

    useEffect(()=>{
        setForm({...initForms.pedidos});
        getAllAtendentes();
        return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return(                   
            <Modal open={openModal} onClose={handleClose}
                style={styles.mymodal}>
                    
                <form className="form_add" onSubmit={(e)=>e.preventDefault()}>                    
                        <label htmlFor="atendente">Atendente</label>
                        <select name="atendente" onChange={(e)=>handleSelectChange(e)}>
                            {atendentes.map((att) => (
                                <option value={att.id}>{att.nome}</option>
                            ))}
                        </select> 
                        
                        <label htmlFor="produto">Item</label>
                        <select name="item" id="item" onChange={(e)=>handleSelectChange(e)} >
                            {cardapio.map((item) => (
                                <option value={item.id}>{item.descricao}</option>
                                ))}
                        </select>
                        
                        <label htmlFor="quantidade">Quantidade</label>
                        <input id="quantidade" name="quantidade" 
                            type={'number'} 
                            value={form.quantidade}
                            onChange={((e)=>handleInputChange('quantidade', e))}/>
                        <div className="formulario">
                            <button type="submit" onClick={handleSubmitForm}>Enviar</button>
                        </div>
                </form>               
            </Modal>
        
    );
}