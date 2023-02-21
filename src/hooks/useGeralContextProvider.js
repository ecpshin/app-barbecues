import { useState, useEffect } from "react";
import api from '../services/api';



export default function useGeralContextProvider() {

    const [mesas, setMesas] = useState([
        {id: 1, ativa: true},
        {id: 2, ativa: false},
        {id: 3, ativa: false},
        {id: 4, ativa: false},
        {id: 5, ativa: false},
        {id: 6, ativa: false},
        {id: 7, ativa: false},
        {id: 8, ativa: false},
      ]);

      const [atendentes, setAtendentes] = useState([]);
    
    const [openModal, setOpenModal] = useState({
        adicionar: false,
        fechar: false,
        detalhar: false
      });

    const handleOpen = (id, name) => {
        localStorage.setItem('mesa_id', id);
        setOpenModal({...openModal, [name]: true});
        return;
      }
    
      const handleClose = () => {
        localStorage.clear();
        setOpenModal({
          adicionar: false,
          fechar: false,
          detalhar: false
        })
      }

  const [pedidos, setPedidos] = useState({
        mesa: 0,
        atendente: 'default',
        item: null,
        quantidade: 1,
        preco: 0
      });

  const [form, setForm] = useState({});

    async function getAllAtendentes () {
      try{
        const rs = await api.get('/atendentes');
        setAtendentes(rs.data);
      } catch(error){}

    }
    

    const getMesa = () => {
      if(!localStorage.getItem('mesa_id')){
        return 0;
      }
      const aux = localStorage.getItem('mesa_id').split('-');
      return aux[1];
    }

    const initForms = {
        
        pedidos: {
            id: 0,
            mesa_id: getMesa(), 
            atendente: 0,
            item: 0,
            quantidade: 0
        },

        atendentes: {
            id: 0,
            nome: ""
        }
    }

    function handleOcupar(mesaId){
        
        const localMesas = mesas;
        for(let localMesa of localMesas){
            if(localMesa.id === Number(mesaId)){
                localMesa.ativa = !localMesa.ativa;
            }
        }
        setMesas(localMesas);        
        return;
    }

    const handleChangeForm = (prop) => (e) => {
        setForm({...form, [prop]: e.target.value});
        return;
    }

    function handleSelectChange(e){
      setForm({...form, [e.target.name]: e.target.value});      
      return;
  }

    function dateFormulario(date) {
		const string = new Date(date).toLocaleDateString();
		console.log(string);
	}

	function formataData(date) {
		return new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
	}

    return {
        mesas,
        setMesas,
        pedidos,
        setPedidos,
        form,
        initForms, 
        setForm,
        openModal,
        useState,
        useEffect,
        dateFormulario,
        formataData,
        handleSelectChange,
        handleChangeForm,
        handleOcupar,
        handleOpen,
        handleClose,
        getAllAtendentes,
        atendentes,
        setAtendentes
    }
}