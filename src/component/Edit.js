import { useState  , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom"

const EditContact = () => {
    const {id} = useParams();
    const contacts = useSelector(state =>state);
    const dispatch = useDispatch();
const history = useHistory();

    const currentContact =contacts.find(contact=>contact.id === parseInt(id));
    console.log(currentContact);
    const [name, setName] = useState(currentContact.name);
    const [email, setEmail] = useState(currentContact.email);
    const [phone, setPhone] = useState(currentContact.phone);
    const Submit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
          return toast.warning("Please fill in all inputs");
        }
    
        if (contacts.find((contact) =>contact.id !== id && contact.email === email)) {
          return toast.error("email already exists");
        }
        if (contacts.find((contact) =>contact.id !== id &&  contact.phone === parseInt(phone))) {
          return toast.error("phone already exists");
        }
        const data = {
          id: currentContact.id,
          name,
          email,
          phone,
        };
        dispatch({type :"upDate" , payload : data});
        toast.success("contact update successfully")
        history.push("/");
      
      };
      useEffect(()=>{
        localStorage.setItem("Contacts" , JSON.stringify(contacts))
    })
    return ( 
        
        <div className="add text-center">
            <div className="container">
                <h1 className="add-contact">
                    Update Contact With Number :  {id}
                </h1>
                <div className="row">
                    <div className="col-md-8 text-center">
                        <form className="form-box" onSubmit={Submit}>
                            <div className="form-group">
                                <input className="input" type="text"  placeholder="Name ...." value={name}  onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                <input className="input" type="email" placeholder="email ...."  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                <input className="input" type="number" placeholder="phone ...."   value={phone}
                  onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group">
                                <input className="btn-submit"  type="submit"  value="Update Contact"/>
                                <Link className="cancel" to="/">Back To Home </Link>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditContact;