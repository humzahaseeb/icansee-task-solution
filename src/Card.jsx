import { useState } from "react";

const defaultFormData = {
  email: "",
  password: "",
};

const Card = () => {

    const [formData, setFormData] = useState(defaultFormData);
    const { email, password } = formData;

    const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

    const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };


  return (
    <div className='Card'>
        <div className='Card-Content'>
            <div className='Card-Heading'>Support Login</div>
            <div className='form-content'>
                <form onSubmit={onSubmit}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" value={email} onChange={onChange} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '0.5rem'
                        }}
                    >
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="password" value={password} onChange={onChange} />
                    </div>

                    <div className='Card-Footer'>
                        <button type="submit">Login</button>
                    </div>

                    <div className='Card-Footer'>
                        <a href="https://www.icansee.co.uk/" target='_blank'>
                            or Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Card