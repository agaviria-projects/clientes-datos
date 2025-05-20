export function Login() {
    return (
        <>
            <section className="container mt-5">
                <section className="row justify-content-center">
                    <section className="col-12 col-md-6">
                        <form className="p-5 border rounded shadow">
                            <h3 className="text-center mb-4">Formulario de Asistencia</h3>
                            <input type="text" className="form-control mb-3" placeholder="Estudiante" />
                            <input type="text" className="form-control mb-3" placeholder="Grupo" />
                            <input type="date" className="form-control mb-3" placeholder="Fecha" />
                            <button className="btn btn-primary w-100">Enviar</button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
}
