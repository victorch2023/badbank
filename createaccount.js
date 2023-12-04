function CreateAccount(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [btnstatus, setBtnstatus] = React.useState(true);
    const ctx = React.useContext(UserContext);


    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function validatepassword(field, label){
        if (password.length<8){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleOnChangeName (event){
        const newContent = event.target.value;
        setName(newContent);
        setBtnstatus(newContent === '');
    };

    function handleOnChangeEmail (event){
        const newContent = event.target.value;
        setEmail(newContent);
        setBtnstatus(newContent === '');
    };

    function handleOnChangePassword (event){
        const newContent = event.target.value;
        setPassword(newContent);
        setBtnstatus(newContent === '');
    };



    function handleCreate(){
        console.log(name, email, password);
        if (!validate(name,     'name'))        return;
        if (!validate(email,    'email'))       return;
        if (!validate(password, 'password'))    return;
        if (!validatepassword(password, 'password should have 8 characters at least'))    return;
        ctx.users.push({name,email,password,balance:100,logstatus:false});
        setShow(false);
    }


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setBtnstatus(true);
    }


    return(
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
//            style={{maxWidth:"18rem"}}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleOnChangeName} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleOnChangeEmail} /><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handleOnChangePassword} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={btnstatus}>Create Account</button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}

        />
    )
}