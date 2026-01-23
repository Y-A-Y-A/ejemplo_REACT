function Expresiones(){
    const nombre = 'Dara';
    const apellidos = 'Gomez Santos';
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es {nombre} y tus apellidos son {apellidos} </h3>
            <Lista/>
        </div>
    )
}

function Lista(){
    const user = [
        {id:1, name: 'Nobara', role: 'Web Developer'},
        {id:2, name: 'Maomao', role: 'Web Developer'},
        {id:3, name: 'Megumi', role: 'Team Leader'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Nombre</th>
                    <th>Role</th>
                    </tr>
                        {
                            user.map(function(user, index){
                                return(
                                    <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}
export default Expresiones