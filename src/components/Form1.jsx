import { useState } from "react";
import style from "./Form1.module.css"
import validate from "./validate";
import Swal from "sweetalert2";

const Form1 = () => {

    const postGeocerca = (form)=>{console.log("{form}")}
    const dispatch = console.log("enviado")

    const [form, setForm] = useState({
        geocerca: "",
        unidades: "",
        nombreUnidad: "",
        licenciaChofer: "",
        emailChofer: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setErrors(
            validate({
                ...form,
                [event.target.name]: event.target.value,
            })
        );
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const errorSave = validate(form);
        if (Object.values(errorSave).length !== 0) {
            Swal.fire({
                text: 'Debes completar todos los datos obligatorios',
                icon: "warning",
                timerProgressBar: false,
                showConfirmButton: false,
                timer: 3000,
            })
        }
        else {
            dispatch(postGeocerca(form));
            Swal.fire({
                text: 'Geocerca Creada!',
                icon: 'success',
                showConfirmButton: false,
                showCancelButton: false,
                timer: 2000,
            })
            setForm({
                geocerca: "",
                unidades: "",
                nombreUnidad: "",
                licenciaChofer: "",
                emailChofer: "",
            });
        }
    };

    return (
        <div className={style.geoForm} >
            <p className={style.title}>Crear Geocerca</p>
            <form onSubmit={handleSubmit} name="form">

                <div className={style.field}>
                    <p className={style.label}>Geocerca*</p>
                    <select name="geocerca" id="geocerca" value={form.geocerca} className={style.inputForm} onChange={handleChange} aria-label="geocerca">
                        <option value="" disabled selected>Seleccionar una opción</option>
                        <option value="Monterrey">Monterrey</option>
                        <option value="Ciudad de México">Ciudad de México</option>
                        <option value="Texas">Texas</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Laredo">Laredo</option>
                    </select>
                    {!errors.geocerca && <span className={style.noerror}>p</span>}
                    {errors.geocerca && <span className={style.error}>{errors.geocerca}</span>}
                </div>

                <div className={style.field}>
                    <p className={style.label}>Unidades*</p>
                    <select id="units" name="unidades" value={form.unidades} className={style.inputForm} onChange={handleChange} aria-label="unidades">
                        <option value="" disabled selected>Seleccionar una opción</option>
                        <option value="Base 1525">Base 1525</option>
                        <option value="Base 1458">Base 1458</option>
                        <option value="Base 1258">Base 1258</option>
                    </select>
                    {!errors.unidades && <span className={style.noerror}>p</span>}
                    {errors.unidades && <span className={style.error}>{errors.unidades}</span>}
                </div>

                <div className={style.field}>
                    <p className={style.label}>Nombre de la unidad</p>
                    <input type="text" id="name" name="nombreUnidad" value={form.nombreUnidad} placeholder="" className={style.inputForm} onChange={handleChange} aria-label="nombreUnidad" />
                    {!errors.nombreUnidad && <span className={style.noerror}>p</span>}
                    {errors.nombreUnidad && <span className={style.error}>{errors.nombreUnidad}</span>}
                </div>

                <div className={style.field}>
                    <p className={style.label}>Licencia del chofer</p>
                    <input type="text" id="licencia" name="licenciaChofer" value={form.licenciaChofer} placeholder="" className={style.inputForm} onChange={handleChange} aria-label="licenciaChofer"/>
                    {!errors.licenciaChofer && <span className={style.noerror}>p</span>}
                    {errors.licenciaChofer&& <span className={style.error}>{errors.licenciaChofer}</span>}
                </div>

                <div className={style.field}>
                    <p className={style.label}>Email chofer</p>
                    <input type="text" id="email" name="emailChofer" value={form.emailChofer} placeholder="" className={style.inputForm} onChange={handleChange} aria-label="emailChofer"/>
                    {!errors.emailChofer && <span className={style.noerror}>p</span>}
                    {errors.emailChofer && <span className={style.error}>{errors.emailChofer}</span>}
                </div>

            </form>
            <button className={style.blueButtonForm} onClick={handleSubmit}>
                Crear Geocerca
            </button>
        </div>
    );
};


export default Form1