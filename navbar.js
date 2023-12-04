function NavBar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-warning">
            
                <a class="navbar-brand" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home" aria-selected="false" href="#" title='Nice bank but a little unsecure' style={{ fontFamily:'Arial, Bold', fontSize:'40px' }}>BadBank</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="CreateAccount-tab" data-bs-toggle="tab" data-bs-target="#CreateAccount-tab-pane" type="button" role="tab" aria-controls="CreateAccount-tab-pane" aria-selected="false" href="#/CreateAccount/" title='Submit your data and create easily your account' style={{ color: 'black' }}>Create Account</a>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="deposit-tab" data-bs-toggle="tab" data-bs-target="#deposit-tab-pane" type="button" role="tab" aria-controls="deposit-tab-pane" aria-selected="false" href="#/deposit/" title='Make deposit in your account easely' style={{ color: 'black' }}>Deposit</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="withdraw-tab" data-bs-toggle="tab" data-bs-target="#withdraw-tab-pane" type="button" role="tab" aria-controls="withdraw-tab-pane" aria-selected="false" href="#/withdraw/" title='Withdraw your money in few steps' style={{ color: 'black' }}>Withdraw</a>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="alldata-tab" data-bs-toggle="tab" data-bs-target="#alldata-tab-pane" type="button" role="tab" aria-controls="alldata-tab-pane" aria-selected="false" href="#/alldata/" title='See all the users suscribed and all the operations done' style={{ color: 'black' }}>AllData</a>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    );
}
