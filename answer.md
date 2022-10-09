1. Have spent approx 6 hrs on project.

2.1.)Should have added more pages for hotels,services,items,analytics and guestItems(items used by guests) to make it look like demo.
  2.)Should have used redux for retriving names instead of Ids and use names in forms
  3.)Should have added features and data for checkin and checkout
  4.)Should have added status tracking feature for services and guests
  5.)Should have used ag-grid library for showing lists

3.Most useful features were using useeffect and usestate for reactjs. for developing single page application and making it faster.
 const [allValues, setAllValues] = useState({
        guest_name:'',
        hotel_id:0,
        status:'',
        checkin:'',
        checkout:''
     });

     const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

     useEffect(() => {
    getguests();
    getguests_no();
  }, []);

4.)firstly for checking the issue i will replicate it and identify where it is happening by seeing logs in console. if no logs present will add additional logs for testing and also see which type of data or method is creating issue by logs and then fix the method or code causing the issue. Yes I have done this using splunk for backend and console of browser for frontend I have fixed a major issue for Email support system by using splunk where mails of a respective organisation were going to different organisation.I have done it by tracking the instance id and the deployed war files version .


*****Database Design*****

Client Table:
Columns: client_id(pk),mobile_number
Can also use multiple table instead of client table for each client

Hotel Table:
Columns: hotel_id(pk),client_id(fk),hotel_name,address

Guest Table:
Columns: guest_id(pk),hotel_id(fk),guest_name,mobile_number,status(check-in,-out,precheck-in),checkin,checkout(timestamp)

Service Table:
Columns: service_id(pk),hotel_id(fk),visible(boolean),service_name

Items Table(Items in service):
Columns: item_id(pk),rate,service_id,visible(boolean),item_name

GuestItemTable(order Table):
Columns:order_id(pk),item_id(fk),guest_id(fk),time,instructions,status,rating

*****Architecture Design*****

Client Side(client folder) using React.js <==> Server Side(server folder) using node.js <===> Database(postgres)
