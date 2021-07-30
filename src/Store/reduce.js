
const Students = JSON.parse(localStorage.getItem("Contacts"))|| [];
const StudentReduce = (state = Students , Action) => {
   switch(Action.type){
       case("addContact"):return state = [...state , Action.payload];
       case ("upDate") : const update = state.map(contact => contact.id === Action.payload.id? Action.payload :contact);
       return state = update;
       case("delete") : const filterContacts = state.filter(contact=>contact.id !== Action.payload);
       return state = filterContacts;
       default: return state;
      
   }
  
}


export default StudentReduce;