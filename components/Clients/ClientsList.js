import { GetClients } from "@/app/lib/GetClients";

const ClientsList = async () => {

    const data = await GetClients()

    console.log("DATA CLIENTS---->",data);

    return (
        <div>
            <h1>Clients</h1>
        </div>
    );
};

export default ClientsList;