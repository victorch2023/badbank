function Deposit(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [amount,setAmount]        = React.useState('');
    const [btnstatus, setBtnstatus] = React.useState(true);
    const ctx = React.useContext(UserContext);
    const type = 'deposit'
    const date = new Date()

    function validate(field){
        if (!field){
            setStatus('Empty field');
            setTimeout(() => setStatus(''), 3000);
            setBtnstatus(true)
            return false;
        }

        if(isNaN(field)){
            setStatus('Error: Is not a number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        const number = parseFloat(field);
        if(number < 0){
            setStatus('Error: Is negative');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        return true;

    }

    function handleDeposit(){
        console.log(amount);
        if (!validate(amount))        return;
        ctx.users[0].balance += Number(amount);
        const balance = ctx.users[0].balance
        ctx.ops.push({type,amount,balance,date});
        setShow(false);
    }

    function clearForm(){
        setAmount('');
        setShow(true);
        setBtnstatus(true);
    }

    function handleOnChange (event){
        const newContent = event.target.value;
        setAmount(newContent);
        setBtnstatus(newContent === '');
    };

    return(
        <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                Balance<br/>
                <h2>USD: {JSON.stringify((ctx.users[0]).balance)}</h2><br/><br/>
                <p>Set a deposit</p>
                Amount<br/>
                <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={handleOnChange} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={btnstatus}>Confirm deposit</button>
                </>
            ) : (
                <>
                Balance<br/>
                <h2>USD: {JSON.stringify((ctx.users[0]).balance)}</h2><br/><br/>
                <h5>Success deposit</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Set another deposit</button>
                </>
            )}

        />
    )
}