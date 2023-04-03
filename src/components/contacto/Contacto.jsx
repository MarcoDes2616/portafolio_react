import "./contacto.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";

const Contacto = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [active, setActive] = useState(false)
    const inputNull = { name: "", phone: "", email: "", company: "" };

    const sendEmail = data => {
        console.log("voy a setear");
        setActive(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/marco2616@gmail.com', {
            name: `Nuevo mensaje de ${data.name}`,
            message: `${data.name} desea ponerse en contacto contigo, lo puedes contactar este correo ${data.email} o a su numero telefónico ${data.phone}."}`
        })
            .then(res => {
                reset(inputNull)
                setActive(false)
            })
            .catch(error => console.error(error))
    }

    console.log(active);
    return (
        <div className="contacto">
            <h2>Contacto</h2>
            <div className="formulario">
                <p>Estaré a gusto de responder a tu contacto a la brevedad posible!</p>
                <form onSubmit={handleSubmit(sendEmail)}
                className='form_container'>
                    <i className={ active ? 'bx bx-mail-send bx-fade-right bx-lg' : 'bx bx-mail-send bx-lg'}></i>
                    <div className="names_container">
                        <div className="input_container">
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" id='name' placeholder="Nombre y Apellido"  {...register('name')} />
                        </div>
                    </div>
                    <div className="input_container">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder="E-mail"{...register('email')} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="phone">Teléfono (incluir codigo País)</label>
                        <input type="text" id='phone' placeholder="Teléfono" {...register('phone')} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="company">Empresa o Institución que representa</label>
                        <input type="text" id='company' placeholder="Empresa o compañia" {...register('company')} />
                    </div>
                    <button className='submit_btn'>
                        Send
                    </button>
                    <hr />
                    <p>Gracias por contactarme!</p>
                </form>
            </div>
        </div>
    );
};

export default Contacto;