import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

interface Template {
  id: number;
  nome: string;
  id_template: number;
  id_grupo: string;
  ids_pontos: string;
  numTelas: number;
  created_at: string;
  updatedAt: string;
}
const Msg = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateInfos, setTemplateInfos] = useState<number>(0);

  useEffect(() => {
 
    api
      .get(`/msg`)
      .then(response => {
        const persons = response.data;
        const loungeur = response.data.length;
        setTemplates(persons);
        setTemplateInfos(loungeur);
      });
  });


  return (
    <div className="product-list">
      
     
      {templates.map(template => 
        <article key={template.id}>
          <strong>{template.id}</strong>
        
          <p>{template.nome}</p>
       
          
          <Link to={`templates/${template.id}/${template.id_template}`}>Salvos</Link>
        </article>
      )}

  
    </div>
  );
};
export default Msg;
