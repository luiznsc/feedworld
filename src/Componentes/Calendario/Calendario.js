import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { format } from 'date-fns';
// import { isSameDay } from 'date-fns/esm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Calendario.css';

const Calendario = () => {
  const [colheitas, setColheitas] = useState([]);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        const response = await axios.get("http://localhost:8080/MyFarm1/rest/colheita"); // Altere a URL e o endpoint conforme a sua API
        const colheitasFromDatabase = response.data; // Supondo que a resposta da API seja um array de objetos de colheita
        const colheitasFormatted = colheitasFromDatabase.map((colheita) => {
          if (colheita.data) {
            return { ...colheita, data: formatDate(colheita.data) };
          }
          return colheita;
        });
        setColheitas(colheitasFormatted);
      } catch (error) {
        toast.error("Erro ao buscar os dados da colheita do banco de dados");
      }
    }
      fetchDataFromDatabase();
  }, []);


  const formatDate = (dateString) => {
    if (dateString) {
      const [day, month, year] = dateString.split("/");
      return new Date(`${year}-${month}-${day}`);
    }
    return null;
  };


  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };


  const verificarCompromisso = (date) => {
    const calendarioDate = new Date(date);
  
    return colheitas.some((colheita) => {
      const dataPlantio = new Date(colheita.dataPlantio);
      const dataColheita = new Date(colheita.dataColheita);
      const dataFornecida = new Date(colheita.dataFornecida);
  
      const samePlantio = isSameDay(calendarioDate, dataPlantio);
      const sameColheita = isSameDay(calendarioDate, dataColheita);
      const sameFornecida = isSameDay(calendarioDate, dataFornecida);
  
      if (samePlantio) {
        toast.info('Há PLANTIO registrado para essa data.', {
          position: "bottom-left",
        });
      }
  
      if (sameColheita) {
        toast.success('Há COLHEITA registrada para essa data.', {
          position: "bottom-left",
        });
      }
  
      if (sameFornecida) {
        toast.warning('Há FORNECIMENTO registrado para essa data.', {
          position: "bottom-left",
        });
      }

      return samePlantio || sameColheita || sameFornecida;
    });
  };


  const handleDateClick = (date) => {
    const formattedDate = format(date, 'dd/MM/yyyy');

    verificarCompromisso(formattedDate);
  };

  return (

    <div className="calendar">
      <h1>Acompanhe a situação das suas safras:</h1>
      <Calendar locale="pt-BR"
        onClickDay={handleDateClick}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const hasCompromisso = verificarCompromisso(date);
            return hasCompromisso ? 'has-compromisso' : '';
          }
          return '';
        }}
      />
      <ToastContainer/>  
    </div>
  );
};
export default Calendario;


