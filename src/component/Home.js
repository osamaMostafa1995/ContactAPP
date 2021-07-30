import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();
    const deleteContact = (id)=>{
dispatch({type :"delete" , payload : id});
toast.success("contact delete successfully");
    }
    console.log(contacts);
    useEffect(()=>{
      localStorage.setItem("Contacts" , JSON.stringify(contacts))
  })
    return ( 
        <div className ="container">
<div className="row g-0">
    <div className="col-lg-12 home-title">
    <div className="row g-0">
      
      <div className="col-md-12 home-title-btn">
      <Link to="/add"  className="btn add-contact">
            Add Contact
        
        </Link>
      </div>
    </div>
       
    </div>
    <div className="col-md-12 mx-auto">
    <table className="table table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map(contact=>(
        <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
                <Link to ={`/edit/${contact.id}`}>edit</Link>
                <button onClick = {()=>deleteContact(contact.id)}>delete</button>
            </td>
        </tr>
    ))}
  </tbody>
</table>
    </div>
</div>
        </div>
     );
}
 
export default Home;