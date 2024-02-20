export async function GetClients() {
    try{
        const res = await fetch("http://localhost:3000/api/users")

        return await res.json()
    }catch (error){
        console.log("error!!!", error)
    }
}
