/* eslint-disable */
import './Login.css'

function Login() {
    return (
        <div className="login">
            <span><h2>로그인</h2></span><br />
            <form id='loginForm' method='POST' action='/home'>
                <label style={{marginRight:'75px'}}>ID</label><input id='userId' placeholder='아이디' /><br/><br/>
                <label style={{marginRight:'5px'}}>PASSWORD</label><input id='userPW' type={'password'} placeholder='비밀번호' /><br/><br/>
                <button type='submit' style={{margin:'10px', padding:'10px'}}>로그인</button>
            </form>
        </div>
    )
}

export default Login;