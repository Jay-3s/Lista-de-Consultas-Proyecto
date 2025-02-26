async function getSoli() {
    try {
        const response = await fetch('http://localhost:3000/solicitudes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getSoli };

//////////LLAMADO POST//////////

async function postSoli(solis) {
    try {
     
        const userData = { 
            solis
        
        };



        const response = await fetch("http://localhost:3000/solicitudes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postSoli}

//////////////LLAMADO UPDATE/////////////


async function updateSoli(solis)
{
    try {
     
        const userData = { 
           solis
        };


        


        const response = await fetch("http://localhost:3000/solicitudes/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateSoli}



//////////////LLAMADO DELETE/////////////


async function deleteSoli(id) {
    try {
        const response = await fetch(`http://localhost:3000/solicitudes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteSoli };