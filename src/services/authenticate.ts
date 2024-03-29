import apiFetch from '../../lib/tools/fetcher';

export const getUser = async () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await apiFetch.get("/api/id/me")
    
        resolve(data);
    })
}

export const isLoggedIn = async () => {
    console.log(await getUser());
}

export const login = async ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await apiFetch.post("/api/id/sign-in", { 
            email,
            password
        })

        resolve(data);
    })
}

export const logout = async () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await apiFetch.post("/api/id/sign-out");

        if(data.ok) resolve(data);
        else reject(data);
    })
}