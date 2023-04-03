import "./contacto.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contacto = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const sendEmail = data => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/marco2616@gmail.com', {
            name: `Nuevo mensaje de ${data.name}`,
            message: `${data.name} desea ponerse en contacto contigo, lo puedes contactar este correo ${data.email} o a su numero telefónico ${data.phone}."}`
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
    }
    return (
        <div className="contacto">
            <h2>Contacto</h2>
            <div className="formulario">
                <p>Estaré a gusto de responder a tu contacto a la brevedad posible!</p>
                <form onSubmit={handleSubmit(sendEmail)}
                className='form_container'>
                    <i className='bx bx-mail-send bx-lg'></i>
                    <div className="names_container">
                        <div className="input_container">
                            <label htmlFor="name">Nombre y Apellido</label>
                            <input type="text" id='name' placeholder="Nombre"  {...register('name')} />
                        </div>
                    </div>
                    <div className="input_container">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'{...register('email')} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="text" id='phone' {...register('phone')} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="company">Empresa o Institución que represneta</label>
                        <input type="text" id='company' {...register('company')} />
                    </div>
                    <button className='submit_btn'>
                        Send
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <hr />
                    <p>Gracias por contactarme!</p>
                </form>
            </div>
        </div>
    );
};

export default Contacto;