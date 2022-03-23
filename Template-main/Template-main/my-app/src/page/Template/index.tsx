
import { useHistory } from 'react-router-dom';

import React, { useEffect, useState, ChangeEvent } from 'react';


import api from '../../services/api';


interface Photo {
  id: string;
  nome_foto: string;
  foto: string;
  id_mensagem:string;
}

interface Text {
  id: string;
  mensagem: string;
  tela: string;
  nome_variavel:string;
  id_mensagem:string;
}

interface Textpo {
  id: string;
  mensagem: string;
  tela: string;
  nome_variavel:string;
  id_mensagem:string;
  id_template:string;

}


interface Foto {
  id: number;
  id_template: string;
  pos_x: number;
  pos_y: number;
  t_horizontal: number;
  t_vertical: number;
  tela: number;
  createdAt: string;
  updatedAt: string;
}




const Template = () => {

  const [fotoTelas1, setFotoTelas1] = useState<Photo[]>([]);
  const [Textotela1, settextoTelas1] = useState<Text[]>([]);
  const [foto1, settextoPosition1] = useState<Foto[]>([]);

  const [foto1posi, setfoto1pos] = useState<Foto>();
  const [foto2posi, setfoto2pos] = useState<Foto>();
  const [foto3posi, setfoto3pos] = useState<Foto>();
  const [phototela1, setFotostela1] = useState<Photo>();
  const [phototela11, setFotostela11] = useState<Photo>();
  const [phototela111, setFotostela111] = useState<Photo>();


  const url_string = window.location.href;
  const url_tem = window.location.href;
  const url = new URL(url_string);
  const idtem = new URL(url_tem);
  const id = url.pathname.substr(11,36);
  const id_template = idtem.pathname.substr(48);

 
//Aqui Busca as Imagem na API
  useEffect(() => {
    api
      .get(`/foto`)
      .then(response => {
        const persons = response.data;
        setFotoTelas1(persons);
      });
 
  });
  const foto0 = [] as Photo[];
  const foto2 = [] as Photo[];
  const foto3 = [] as Photo[];

useEffect(() => {

  const photo = fotoTelas1.filter(template => id === template.id_mensagem)

  const photo1 = photo[0]

  const photo2 =  photo[1]

  const photo3 =  photo[2]

  foto0.push(photo1);

  foto2.push(photo2)

  foto3.push(photo3)

  


  const urlfoto = foto0[0];

  const urlfoto2 = foto2[0]

  const urlfoto3 = foto3[0]

  setFotostela1(urlfoto)

  setFotostela11(urlfoto2)

  setFotostela111(urlfoto3)
})
//FIm da Busca




//Aqui busca as posições
  useEffect (() =>{
    api 
       .get(`/photo`)
        .then(response =>{
          const txt = response.data;
        
         settextoPosition1(txt);
        
        })
  })
  const tm1 = [] as Foto[];
  const tm2 = [] as Foto[];
  const tm3 = [] as Foto[];


  useEffect(() => {
    
    const fotos = foto1.filter(fotos=> id_template === fotos.id_template);



    const pos1 = fotos[0]

    const pos2 =  fotos[1]

    const pos3 =  fotos[2]

tm1.push(pos1)

tm2.push(pos2)

tm3.push(pos3)

const posi = tm1[0];

const posi1 = tm2[0]

const posi2 = tm3[0]




setfoto1pos(posi)

setfoto2pos(posi1)

setfoto3pos(posi2)

  })
//Fim da Busca

  return (

    <div>
               
                  <img src={phototela1?.foto} style={{
                        width: `${foto1posi?.t_horizontal}px`,
                        height: `${foto1posi?.t_vertical}px`,
                        top: `${foto1posi?.pos_y}px`,
                        left: `${foto1posi?.pos_x}px`,
                        position: 'absolute',
                        zIndex: 2,
                      }}
                    />

             <img src={phototela11?.foto} style={{
                        width: `${foto2posi?.t_horizontal}px`,
                        height: `${foto2posi?.t_vertical}px`,
                        top: `${foto2posi?.pos_y}px`,
                        left: `${foto2posi?.pos_x}px`,
                        position: 'absolute',
                        zIndex: 2,
                      }}
                    />

              <img src={phototela111?.foto} style={{
                        width: `${foto3posi?.t_horizontal}px`,
                        height: `${foto3posi?.t_vertical}px`,
                        top: `${foto3posi?.pos_y}px`,
                        left: `${foto3posi?.pos_x}px`,
                        position: 'absolute',
                        zIndex: 2,
                      }}
                    />

     </div>
  );
  
};

export default Template;
