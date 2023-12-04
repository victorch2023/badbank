function Login(){
    const [status, setStatus]       = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [index, setIndex]         = React.useState('');
    const ctx = React.useContext(UserContext);
    const [logged, setLogged]       = React.useState('');

    React.useEffect(() => {
    if (ctx.users.findIndex(user => user.logstatus === true)<0){
        setLogged(false)
    } else {
        setLogged(true)
        const newIndex = ctx.users.findIndex(user => user.logstatus === true);
        setIndex(newIndex);
    };
    },[ctx.users]);
    console.log(index);

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function verify(index){
        const newIndex = ctx.users.findIndex(user => user.email === email && user.password === password);
        setIndex(newIndex);
        if (index < 0){
            setStatus('Error in data');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleLogin(){

        console.log(email, password);
        
        if (!verify(index))                     return;
        if (!validate(email,    'email'))       return;
        if (!validate(password, 'password'))    return;

       

        const newIndex = ctx.users.findIndex(user => user.email === email && user.password === password);
        setIndex(newIndex);

        if (!ctx.users[index]) {
            console.error('El usuario en la posición index no está definido.');
            setStatus('Error in data');
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        ctx.users[newIndex].logstatus = true;
        setLogged(true)
    }

    function logout(){
        const newIndex = ctx.users.findIndex(user => user.logstatus === true);
        setIndex(newIndex);
        ctx.users[newIndex].logstatus = false;
        setEmail('');
        setPassword('');
        setLogged(false);
    }

        return(
            <Card
                bgcolor="primary"
                header="Login"
                status={status}
                body={!logged ? (                
                    <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                    </>              
                ) : (
                    <>
                    <h5>User Logged!</h5>
                    <button type="submit" className="btn btn-light" onClick={logout}>Logout</button>
                    </>
                )}
            />)
}