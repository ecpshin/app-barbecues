import { useState, useEffect } from "react";



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
    
      const [pedidos, setPedidos] = useState({
        mesa: 0,
        atendente: 'default',
        item: null,
        quantidade: 1,
        preco: 0
      });
    const [form, setForm] = useState({});
    const initForms = {
        pedidos: {
            id: 0,
            atendente_id: 0,
            tipo: "espetinho",
            descricao: "",
            quantidade: 0,
            preco: 0
        },
        atendentes: {
            id: 0,
            nome: ""
        }
    }

    const handleChangeForm = (prop) => (e) => {
        setForm({...form, [prop]: e.target.value})
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
        setForm,
        useState,
        useEffect,
        dateFormulario,
        formataData,
        handleChangeForm
    }
}