import { useState  , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AddContact = () => {
  const contacts = useSelector((state) => state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
const dispatch = useDispatch();
const history = useHistory();

  const Submit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return toast.warning("Please fill in all inputs");
    }

    if (contacts.find((contact) => contact.email === email)) {
      return toast.error("email already exists");
    }
    if (contacts.find((contact) => contact.phone === parseInt(phone))) {
      return toast.error("phone already exists");
    }
    const data = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };
    dispatch({type :"addContact" , payload : data});
    toast.success("contact add successfully")
    history.push("/");
  
  };
  useEffect(()=>{
    localStorage.setItem("Contacts" , JSON.stringify(contacts))
})
  return (
    <div className="add text-center">
      <div className="container">
        <h1 className="add-contact">Add  New Contact</h1>
        <div className="row ">
          <div className="col-md-8 text-center">
            <form className="form-box " onSubmit={Submit}>
              <div className="form-group">
                <input className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name ...."
                />
              </div>
              <div className="form-group">
                <input className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email ...."
                />
              </div>
              <div className="form-group">
                <input className="input"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="phone ...."
                />
              </div>
              <div className="form-group">
                <input  className="btn-submit"  type="submit" value="Add Contact" />
                <Link className="cancel" to="/">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
